import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';
import type { Achievement } from '../../types/portfolio';

const emptyAchievement: Omit<Achievement, '_id'> = {
  title: '',
  year: new Date().getFullYear(),
  description: '',
  type: 'award',
  issuer: '',
};

export function Achievements() {
  const navigate = useNavigate();
  const { achievements, setAchievements, addAchievement, updateAchievement, removeAchievement, loading, setLoading, error, setError } = usePortfolioStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Achievement, '_id'>>(emptyAchievement);

  const totalAchievements = useMemo(() => achievements.length, [achievements]);

  useEffect(() => {
    const loadAchievements = async () => {
      setLoading(true);
      try {
        const response = await portfolioApi.getAchievements();
        if (response.success) {
          setAchievements(response.data);
        }
      } catch (error) {
        setError('Failed to load achievements');
      } finally {
        setLoading(false);
      }
    };
    loadAchievements();
  }, []);

  const handleAddAchievement = async () => {
    if (!formData.title.trim() || !formData.year) {
      setError('Title and year are required');
      return;
    }

    try {
      const response = await portfolioApi.createAchievement(formData);
      if (response.success) {
        addAchievement(response.data);
        setFormData(emptyAchievement);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to add achievement');
    }
  };

  const handleUpdateAchievement = async (id: string) => {
    const entry = achievements.find((item) => item._id === id);
    if (!entry) return;

    try {
      const response = await portfolioApi.updateAchievement(id, entry);
      if (response.success) {
        updateAchievement(id, response.data);
        setEditingId(null);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update achievement');
    }
  };

  const handleDeleteAchievement = async (id: string) => {
    if (!confirm('Delete this achievement?')) return;
    try {
      const response = await portfolioApi.deleteAchievement(id);
      if (response.success) {
        removeAchievement(id);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete achievement');
    }
  };

  const updateItemField = (id: string, field: keyof Achievement, value: any) => {
    const updated = achievements.map((item) =>
      item._id === id ? { ...item, [field]: value } : item
    );
    setAchievements(updated as Achievement[]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-slate-500">Loading achievements…</p>
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
              <h1 className="mt-4 text-3xl font-bold text-slate-950">Achievements CMS</h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Add honors, awards, and certification details with polished portfolio cards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Entries</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{totalAchievements}</p>
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
              <h2 className="text-xl font-semibold text-slate-900">Add new achievement</h2>
              <p className="mt-2 text-sm text-slate-500">Create an award or recognition item for your portfolio.</p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Award title"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                  <input
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: Number(e.target.value) })}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as Achievement['type'] })}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  >
                    <option value="award">Award</option>
                    <option value="certification">Certification</option>
                    <option value="recognition">Recognition</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Issuer</label>
                <input
                  type="text"
                  value={formData.issuer}
                  onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Issuing organization"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full min-h-[120px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Details about this recognition"
                />
              </div>
              <button
                onClick={handleAddAchievement}
                className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Save achievement
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {achievements.length === 0 ? (
              <div className="rounded-[32px] border border-dashed border-slate-200 bg-white/90 p-10 text-center text-slate-500 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">No achievements yet</p>
                <p className="mt-2 text-sm">Highlight your awards and certifications in the portfolio.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {achievements.map((item) => (
                  <div
                    key={item._id || `${item.title}-${item.year}`}
                    className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xl font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.issuer || 'Unknown issuer'}</p>
                        <p className="mt-2 text-sm text-slate-500">{item.year}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {editingId === item._id ? (
                          <>
                            <button
                              onClick={() => item._id && handleUpdateAchievement(item._id)}
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
                                  if (itemId) handleDeleteAchievement(itemId);
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
                          value={item.title}
                          onChange={(e) => updateItemField(item._id || '', 'title', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Title"
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input
                            type="number"
                            value={item.year}
                            onChange={(e) => updateItemField(item._id || '', 'year', Number(e.target.value))}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          />
                          <select
                            value={item.type}
                            onChange={(e) => updateItemField(item._id || '', 'type', e.target.value as Achievement['type'])}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          >
                            <option value="award">Award</option>
                            <option value="certification">Certification</option>
                            <option value="recognition">Recognition</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          value={item.issuer || ''}
                          onChange={(e) => updateItemField(item._id || '', 'issuer', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Issuer"
                        />
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
