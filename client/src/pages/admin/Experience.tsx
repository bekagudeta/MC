import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';
import type { Experience } from '../../types/portfolio';

type ExperienceForm = Omit<Experience, '_id'> & { achievements: string[] };

const emptyExperience: ExperienceForm = {
  company: '',
  role: '',
  startDate: '',
  endDate: undefined,
  current: false,
  description: '',
  achievements: [''],
};

export function Experience() {
  const navigate = useNavigate();
  const { experience, setExperience, addExperience, updateExperience, removeExperience, loading, setLoading, error, setError } = usePortfolioStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ExperienceForm>(emptyExperience);

  const totalExperience = useMemo(() => experience.length, [experience]);

  useEffect(() => {
    const loadExperience = async () => {
      setLoading(true);
      try {
        const response = await portfolioApi.getExperience();
        if (response.success) {
          setExperience(response.data);
        }
      } catch (error) {
        setError('Failed to load experience entries');
      } finally {
        setLoading(false);
      }
    };
    loadExperience();
  }, []);

  const handleAddExperience = async () => {
    if (!formData.company.trim() || !formData.role.trim() || !formData.startDate.trim()) {
      setError('Company, role, and start date are required');
      return;
    }

    try {
      const response = await portfolioApi.createExperience({
        ...formData,
        achievements: formData.achievements.filter((item) => item.trim()),
      });
      if (response.success) {
        addExperience(response.data);
        setFormData(emptyExperience);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to add experience entry');
    }
  };

  const handleUpdateExperience = async (id: string) => {
    const entry = experience.find((item) => item._id === id);
    if (!entry) return;

    try {
      const response = await portfolioApi.updateExperience(id, {
        ...entry,
        achievements: entry.achievements?.filter((item) => item.trim()) ?? [],
      });
      if (response.success) {
        updateExperience(id, response.data);
        setEditingId(null);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update experience entry');
    }
  };

  const handleDeleteExperience = async (id: string) => {
    if (!confirm('Delete this experience entry?')) return;
    try {
      const response = await portfolioApi.deleteExperience(id);
      if (response.success) {
        removeExperience(id);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete experience entry');
    }
  };

  const handleAchievementChange = (index: number, value: string) => {
    const updated = [...formData.achievements];
    updated[index] = value;
    setFormData({ ...formData, achievements: updated });
  };

  const addAchievementField = () => {
    setFormData({ ...formData, achievements: [...formData.achievements, ''] });
  };

  const removeAchievementField = (index: number) => {
    setFormData({
      ...formData,
      achievements: formData.achievements.filter((_, idx) => idx !== index),
    });
  };

  const updateItemField = (id: string, field: keyof Experience, value: any) => {
    const updated = experience.map((item) =>
      item._id === id ? { ...item, [field]: value } : item
    );
    setExperience(updated as Experience[]);
  };

  const updateAchievementItem = (id: string, index: number, value: string) => {
    const updated = experience.map((item) => {
      if (item._id !== id) return item;
      const achievements = [...(item.achievements || [])];
      achievements[index] = value;
      return { ...item, achievements };
    });
    setExperience(updated as Experience[]);
  };

  const addAchievementItem = (id: string) => {
    const updated = experience.map((item) =>
      item._id === id
        ? { ...item, achievements: [...(item.achievements || []), ''] }
        : item
    );
    setExperience(updated as Experience[]);
  };

  const removeAchievementItem = (id: string, index: number) => {
    const updated = experience.map((item) => {
      if (item._id !== id) return item;
      return {
        ...item,
        achievements: item.achievements?.filter((_, idx) => idx !== index) ?? [],
      };
    });
    setExperience(updated as Experience[]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-slate-500">Loading experience…</p>
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
              <h1 className="mt-4 text-3xl font-bold text-slate-950">Experience CMS</h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Add and manage experience entries for your portfolio timeline.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Entries</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{totalExperience}</p>
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
              <h2 className="text-xl font-semibold text-slate-900">Add new experience</h2>
              <p className="mt-2 text-sm text-slate-500">
                Capture your most recent roles, projects, and achievements.
              </p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Job title or role"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Start date</label>
                  <input
                    type="month"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">End date</label>
                  <input
                    type="month"
                    value={formData.endDate || ''}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value || undefined })}
                    disabled={formData.current}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200 disabled:cursor-not-allowed disabled:bg-slate-100"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  id="currentRole"
                  type="checkbox"
                  checked={formData.current}
                  onChange={(e) => setFormData({ ...formData, current: e.target.checked, endDate: e.target.checked ? undefined : formData.endDate })}
                  className="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <label htmlFor="currentRole" className="text-sm text-slate-700">Currently active role</label>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full min-h-[120px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Short summary of role responsibilities"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">Achievements</label>
                  <button
                    onClick={addAchievementField}
                    className="text-sky-600 hover:text-sky-700 text-sm font-semibold"
                  >
                    + Add achievement
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  {formData.achievements.map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleAchievementChange(index, e.target.value)}
                        className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                        placeholder="Achievement detail"
                      />
                      {formData.achievements.length > 1 && (
                        <button
                          onClick={() => removeAchievementField(index)}
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
                onClick={handleAddExperience}
                className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Save experience
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {experience.length === 0 ? (
              <div className="rounded-[32px] border border-dashed border-slate-200 bg-white/90 p-10 text-center text-slate-500 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">No experience entries yet</p>
                <p className="mt-2 text-sm">Add your first experience item to build your portfolio timeline.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {experience.map((item) => (
                  <div
                    key={item._id || `${item.company}-${item.role}`}
                    className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xl font-semibold text-slate-900">{item.role}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.company}</p>
                        <p className="mt-3 text-sm text-slate-500">
                          {item.startDate} {item.current ? '– Present' : item.endDate ? `– ${item.endDate}` : ''}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {editingId === item._id ? (
                          <>
                            <button
                              onClick={() => item._id && handleUpdateExperience(item._id)}
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
                                  if (itemId) handleDeleteExperience(itemId);
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
                        <div className="grid gap-4 md:grid-cols-2">
                          <input
                            type="text"
                            value={item.company}
                            onChange={(e) => updateItemField(item._id || '', 'company', e.target.value)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                            placeholder="Company"
                          />
                          <input
                            type="text"
                            value={item.role}
                            onChange={(e) => updateItemField(item._id || '', 'role', e.target.value)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                            placeholder="Role"
                          />
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <input
                            type="month"
                            value={item.startDate}
                            onChange={(e) => updateItemField(item._id || '', 'startDate', e.target.value)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          />
                          <input
                            type="month"
                            value={item.endDate || ''}
                            onChange={(e) => updateItemField(item._id || '', 'endDate', e.target.value || undefined)}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          />
                        </div>
                        <textarea
                          value={item.description}
                          onChange={(e) => updateItemField(item._id || '', 'description', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Description"
                          rows={4}
                        />
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-700">Achievements</p>
                            <button
                              onClick={() => item._id && addAchievementItem(item._id)}
                              className="text-sky-600 hover:text-sky-700 text-sm font-semibold"
                            >
                              + Add achievement
                            </button>
                          </div>
                          {(item.achievements || []).map((achievement, idx) => (
                            <div key={idx} className="flex gap-2">
                              <input
                                type="text"
                                value={achievement}
                                onChange={(e) => item._id && updateAchievementItem(item._id, idx, e.target.value)}
                                className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                                placeholder="Achievement detail"
                              />
                              <button
                                onClick={() => item._id && removeAchievementItem(item._id, idx)}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
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
