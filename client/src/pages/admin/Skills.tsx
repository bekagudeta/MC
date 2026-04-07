import { useState, useEffect } from 'react';
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6BCFCB] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading skills...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="text-gray-500 hover:text-gray-700"
              >
                ← Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-[#001722]">Manage Skills</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Add New Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Skill Category</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category Name
              </label>
              <input
                type="text"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BCFCB] focus:border-transparent"
                placeholder="e.g., Programming Languages, Tools, etc."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skills
              </label>
              {formData.items.map((item, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleUpdateNewItem(index, e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6BCFCB] focus:border-transparent"
                    placeholder="Enter a skill"
                  />
                  {formData.items.length > 1 && (
                    <button
                      onClick={() => handleRemoveNewItem(index)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={handleAddNewItem}
                className="text-[#6BCFCB] hover:text-[#5bbfbb] text-sm font-medium"
              >
                + Add Skill
              </button>
            </div>

            <button
              onClick={handleAddCategory}
              className="bg-[#6BCFCB] hover:bg-[#5bbfbb] text-[#001722] font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Add Category
            </button>
          </div>
        </div>

        {/* Existing Categories */}
        <div className="space-y-6">
          {skills.map((category, categoryIndex) => (
            <div key={category._id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                {editingCategory === category._id ? (
                  <input
                    type="text"
                    value={category.category}
                    onChange={(e) => {
                      const updatedSkills = [...skills];
                      updatedSkills[categoryIndex].category = e.target.value;
                      setSkills(updatedSkills);
                    }}
                    className="text-lg font-semibold px-2 py-1 border border-gray-300 rounded"
                  />
                ) : (
                  <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
                )}
                
                <div className="flex space-x-2">
                  {editingCategory === category._id ? (
                    <>
                      <button
                        onClick={() => category._id && handleUpdateCategory(category._id)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                      >
                        <Save className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setEditingCategory(null)}
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => category._id && setEditingCategory(category._id)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => category._id && handleDeleteCategory(category._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    {editingCategory === category._id ? (
                      <>
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => handleUpdateSkillItem(categoryIndex, itemIndex, e.target.value)}
                          className="flex-1 px-3 py-1 border border-gray-300 rounded"
                        />
                        <button
                          onClick={() => handleRemoveSkillItem(categoryIndex, itemIndex)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm">{item}</span>
                    )}
                  </div>
                ))}
                {editingCategory === category._id && (
                  <button
                    onClick={() => handleAddSkillItem(categoryIndex)}
                    className="text-[#6BCFCB] hover:text-[#5bbfbb] text-sm font-medium"
                  >
                    + Add Skill
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
