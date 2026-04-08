import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';

export function Skills() {
  const navigate = useNavigate();
  const { skills, setSkills, loading, setLoading, error, setError } = usePortfolioStore();
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    category: '',
    items: [''],
  });

  const totalSkills = useMemo(
    () => skills.reduce((count, category) => count + (category.items?.length || 0), 0),
    [skills]
  );

  useEffect(() => {
    const loadSkills = async () => {
      setLoading(true);
      try {
        const response = await portfolioApi.getSkills();
        if (response.success) {
          setSkills(response.data);
        }
      } catch (error) {
        setError('Failed to load skills');
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const handleAddCategory = async () => {
    if (!formData.category.trim() || !formData.items.some(item => item.trim())) {
      setError('Please fill in category name and at least one skill');
      return;
    }

    try {
      const response = await portfolioApi.createSkillCategory({
        category: formData.category,
        items: formData.items.filter(item => item.trim()),
      });

      if (response.success) {
        setSkills([...skills, response.data]);
        setFormData({ category: '', items: [''] });
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to add skill category');
    }
  };

  const handleUpdateCategory = async (id: string) => {
    const category = skills.find(s => s._id === id);
    if (!category) return;

    try {
      const response = await portfolioApi.updateSkillCategory(id, category);
      if (response.success) {
        setSkills(skills.map(s => s._id === id ? response.data : s));
        setEditingCategory(null);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update skill category');
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill category?')) return;

    try {
      const response = await portfolioApi.deleteSkillCategory(id);
      if (response.success) {
        setSkills(skills.filter(s => s._id !== id));
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete skill category');
    }
  };

  const handleAddSkillItem = (categoryIndex: number) => {
    const updatedSkills = [...skills];
    updatedSkills[categoryIndex].items.push('');
    setSkills(updatedSkills);
  };

  const handleUpdateSkillItem = (categoryIndex: number, itemIndex: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[categoryIndex].items[itemIndex] = value;
    setSkills(updatedSkills);
  };

  const handleRemoveSkillItem = (categoryIndex: number, itemIndex: number) => {
    const updatedSkills = [...skills];
    updatedSkills[categoryIndex].items.splice(itemIndex, 1);
    setSkills(updatedSkills);
  };

  const handleAddNewItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, ''],
    });
  };

  const handleUpdateNewItem = (index: number, value: string) => {
    const updatedItems = [...formData.items];
    updatedItems[index] = value;
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleRemoveNewItem = (index: number) => {
    const updatedItems = formData.items.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-slate-500">Loading skills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="text-slate-500 hover:text-slate-700 font-medium"
              >
                ← Back to Dashboard
              </button>
              <h1 className="mt-4 text-3xl font-bold text-slate-900">Skills CMS</h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Manage your portfolio skill categories quickly and keep the UI aligned with the live site.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 sm:w-auto sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Categories</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{skills.length}</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Total skills</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{totalSkills}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="rounded-3xl border border-red-200 bg-red-50 px-4 py-4 text-red-700 shadow-sm mb-8">
            {error}
          </div>
        )}

        <div className="grid gap-8 xl:grid-cols-[380px_1fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Add category</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Create a new skill category and add the most relevant skills for your portfolio.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Category name</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="e.g. Technical Skills"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">Skills</label>
                  <button
                    onClick={handleAddNewItem}
                    className="text-sky-600 hover:text-sky-700 text-sm font-semibold"
                  >
                    + Add skill
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  {formData.items.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleUpdateNewItem(index, e.target.value)}
                        className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                        placeholder="Enter skill name"
                      />
                      {formData.items.length > 1 && (
                        <button
                          onClick={() => handleRemoveNewItem(index)}
                          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddCategory}
                className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Save category
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {skills.length === 0 ? (
              <div className="rounded-[32px] border border-dashed border-slate-300 bg-white/80 p-10 text-center text-slate-500 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">No skill categories yet</p>
                <p className="mt-2 text-sm">Start by creating a category on the left to fill your portfolio skills section.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {skills.map((category, categoryIndex) => (
                  <div
                    key={category._id || `${category.category}-${categoryIndex}`}
                    className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        {editingCategory === category._id ? (
                          <input
                            type="text"
                            value={category.category}
                            onChange={(e) => {
                              const updatedSkills = [...(skills || [])];
                              updatedSkills[categoryIndex].category = e.target.value;
                              setSkills(updatedSkills);
                            }}
                            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                          />
                        ) : (
                          <h2 className="text-xl font-semibold text-slate-900">{category.category}</h2>
                        )}
                        <p className="mt-2 text-sm text-slate-500">{category.items?.length ?? 0} skills</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {editingCategory === category._id ? (
                          <>
                            <button
                              onClick={() => category._id && handleUpdateCategory(category._id)}
                              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
                            >
                              <Save className="h-4 w-4" />
                              Save
                            </button>
                            <button
                              onClick={() => setEditingCategory(null)}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                            >
                              <X className="h-4 w-4" />
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => category._id && setEditingCategory(category._id)}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                            >
                              <Edit className="h-4 w-4" />
                              Edit
                            </button>
                            <button
                              onClick={() => category._id && handleDeleteCategory(category._id)}
                              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700 transition hover:bg-red-100"
                            >
                              <Trash2 className="h-4 w-4" />
                              Remove
                            </button>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {category.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex flex-wrap items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3">
                          {editingCategory === category._id ? (
                            <>
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => handleUpdateSkillItem(categoryIndex, itemIndex, e.target.value)}
                                className="flex-1 rounded-3xl border border-transparent bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                              />
                              <button
                                onClick={() => handleRemoveSkillItem(categoryIndex, itemIndex)}
                                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </>
                          ) : (
                            <span className="rounded-3xl bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">{item}</span>
                          )}
                        </div>
                      ))}
                      {editingCategory === category._id && (
                        <button
                          onClick={() => handleAddSkillItem(categoryIndex)}
                          className="self-start rounded-3xl bg-slate-100 px-4 py-2 text-sm font-medium text-sky-600 transition hover:bg-slate-200"
                        >
                          + Add skill
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
