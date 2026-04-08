import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';
import type { Education } from '../../types/portfolio';

const emptyEducation: Omit<Education, '_id'> = {
  degree: '',
  institution: '',
  year: '',
  gpa: '',
  description: '',
};

export function Education() {
  const navigate = useNavigate();
  const { education, setEducation, addEducation, updateEducation, removeEducation, loading, setLoading, error, setError } = usePortfolioStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Education, '_id'>>(emptyEducation);

  const totalEducation = useMemo(() => education.length, [education]);

  useEffect(() => {
    const loadEducation = async () => {
      setLoading(true);
      try {
        const response = await portfolioApi.getEducation();
        if (response.success) {
          setEducation(response.data);
        }
      } catch (error) {
        setError('Failed to load education data');
      } finally {
        setLoading(false);
      }
    };
    loadEducation();
  }, []);

  const handleAddEducation = async () => {
    if (!formData.degree.trim() || !formData.institution.trim() || !formData.year.trim()) {
      setError('Degree, institution, and year are required');
      return;
    }

    try {
      const response = await portfolioApi.createEducation(formData);
      if (response.success) {
        addEducation(response.data);
        setFormData(emptyEducation);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to add education entry');
    }
  };

  const handleUpdateEducation = async (id: string) => {
    const entry = education.find((item) => item._id === id);
    if (!entry) return;

    try {
      const response = await portfolioApi.updateEducation(id, entry);
      if (response.success) {
        updateEducation(id, response.data);
        setEditingId(null);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update education entry');
    }
  };

  const handleDeleteEducation = async (id: string) => {
    if (!confirm('Delete this education entry?')) return;
    try {
      const response = await portfolioApi.deleteEducation(id);
      if (response.success) {
        removeEducation(id);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete education entry');
    }
  };

  const updateItemField = (id: string, field: keyof Education, value: any) => {
    const updated = education.map((item) =>
      item._id === id ? { ...item, [field]: value } : item
    );
    setEducation(updated as Education[]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-slate-500">Loading education…</p>
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
              <h1 className="mt-4 text-3xl font-bold text-slate-950">Education CMS</h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Add and manage your education credentials in a clean portfolio format.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Entries</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{totalEducation}</p>
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
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-slate-900">Add new education</h2>
              <p className="mt-2 text-sm text-slate-500">Add a degree or certification to your portfolio education section.</p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Degree</label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Degree or certification"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Institution</label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="School or organization"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                  <input
                    type="text"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                    placeholder="2026"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">GPA</label>
                  <input
                    type="text"
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                    placeholder="3.9/4.0"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full min-h-[120px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Program details or thesis title"
                />
              </div>
              <button
                onClick={handleAddEducation}
                className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Save education
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {education.length === 0 ? (
              <div className="rounded-[32px] border border-dashed border-slate-200 bg-white/90 p-10 text-center text-slate-500 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">No education records yet</p>
                <p className="mt-2 text-sm">Publish your academic achievements for the public portfolio.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {education.map((item) => (
                  <div
                    key={item._id || `${item.degree}-${item.institution}`}
                    className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xl font-semibold text-slate-900">{item.degree}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.institution}</p>
                        <p className="mt-3 text-sm text-slate-500">{item.year}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {editingId === item._id ? (
                          <>
                            <button
                              onClick={() => item._id && handleUpdateEducation(item._id)}
                              className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100"
                            >
                              <Save className="h-4 w-4" />
                              Save
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50"
                            >
                              <X className="h-4 w-4" />
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => setEditingId(item._id || null)}
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                            >
                              <Edit className="h-4 w-4" />
                              Edit
                            </button>
                            {item._id && (
                              <button
                                onClick={() => {
                                  const itemId = item._id;
                                  if (itemId) handleDeleteEducation(itemId);
                                }}
                                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700 transition hover:bg-red-100"
                              >
                                <Trash2 className="h-4 w-4" />
                                Delete
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    {editingId === item._id ? (
                      <div className="mt-6 space-y-4">
                        <input
                          type="text"
                          value={item.degree}
                          onChange={(e) => updateItemField(item._id || '', 'degree', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Degree"
                        />
                        <input
                          type="text"
                          value={item.institution}
                          onChange={(e) => updateItemField(item._id || '', 'institution', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Institution"
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input
                            type="text"
                            value={item.year}
                            onChange={(e) => updateItemField(item._id || '', 'year', e.target.value)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                            placeholder="Year"
                          />
                          <input
                            type="text"
                            value={item.gpa || ''}
                            onChange={(e) => updateItemField(item._id || '', 'gpa', e.target.value)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                            placeholder="GPA"
                          />
                        </div>
                        <textarea
                          value={item.description || ''}
                          onChange={(e) => updateItemField(item._id || '', 'description', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Description"
                          rows={4}
                        />
                      </div>
                    ) : (
                      item.description ? (
                        <p className="mt-6 text-sm leading-7 text-slate-600">{item.description}</p>
                      ) : null
                    )}
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
