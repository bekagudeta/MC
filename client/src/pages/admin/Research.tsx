import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit, Trash2, Save, X } from 'lucide-react';
import { usePortfolioStore } from '../../store/portfolioStore';
import { portfolioApi } from '../../services/api';
import type { Research } from '../../types/portfolio';

type ResearchForm = Omit<Research, '_id'> & { coAuthors: string[] };

const emptyResearch: ResearchForm = {
  title: '',
  description: '',
  journal: '',
  year: new Date().getFullYear(),
  link: '',
  coAuthors: [''],
  status: 'published',
};

export function Research() {
  const navigate = useNavigate();
  const { research, setResearch, addResearch, updateResearch, removeResearch, loading, setLoading, error, setError } = usePortfolioStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<ResearchForm>(emptyResearch);

  const totalResearch = useMemo(() => research.length, [research]);

  useEffect(() => {
    const loadResearch = async () => {
      setLoading(true);
      try {
        const response = await portfolioApi.getResearch();
        if (response.success) {
          setResearch(response.data);
        }
      } catch (error) {
        setError('Failed to load research data');
      } finally {
        setLoading(false);
      }
    };
    loadResearch();
  }, []);

  const handleAddResearch = async () => {
    if (!formData.title.trim() || !formData.year) {
      setError('Title and year are required');
      return;
    }

    try {
      const response = await portfolioApi.createResearch({
        ...formData,
        coAuthors: formData.coAuthors.filter((item) => item.trim()),
      });
      if (response.success) {
        addResearch(response.data);
        setFormData(emptyResearch);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to add research entry');
    }
  };

  const handleUpdateResearch = async (id: string) => {
    const entry = research.find((item) => item._id === id);
    if (!entry) return;

    try {
      const response = await portfolioApi.updateResearch(id, {
        ...entry,
        coAuthors: entry.coAuthors?.filter((item) => item.trim()) ?? [],
      });
      if (response.success) {
        updateResearch(id, response.data);
        setEditingId(null);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to update research entry');
    }
  };

  const handleDeleteResearch = async (id: string) => {
    if (!confirm('Delete this research entry?')) return;
    try {
      const response = await portfolioApi.deleteResearch(id);
      if (response.success) {
        removeResearch(id);
        setError(null);
      }
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to delete research entry');
    }
  };

  const handleAuthorChange = (index: number, value: string) => {
    const authors = [...formData.coAuthors];
    authors[index] = value;
    setFormData({ ...formData, coAuthors: authors });
  };

  const addAuthorField = () => {
    setFormData({ ...formData, coAuthors: [...formData.coAuthors, ''] });
  };

  const removeAuthorField = (index: number) => {
    setFormData({ ...formData, coAuthors: formData.coAuthors.filter((_, idx) => idx !== index) });
  };

  const updateItemField = (id: string, field: keyof Research, value: any) => {
    const updated = research.map((item) =>
      item._id === id ? { ...item, [field]: value } : item
    );
    setResearch(updated as Research[]);
  };

  const updateAuthorItem = (id: string, index: number, value: string) => {
    const updated = research.map((item) => {
      if (item._id !== id) return item;
      const coAuthors = [...(item.coAuthors || [])];
      coAuthors[index] = value;
      return { ...item, coAuthors };
    });
    setResearch(updated as Research[]);
  };

  const addAuthorItem = (id: string) => {
    const updated = research.map((item) =>
      item._id === id
        ? { ...item, coAuthors: [...(item.coAuthors || []), ''] }
        : item
    );
    setResearch(updated as Research[]);
  };

  const removeAuthorItem = (id: string, index: number) => {
    const updated = research.map((item) => {
      if (item._id !== id) return item;
      return {
        ...item,
        coAuthors: item.coAuthors?.filter((_, idx) => idx !== index) ?? [],
      };
    });
    setResearch(updated as Research[]);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-14 w-14 border-b-4 border-sky-500 mx-auto"></div>
          <p className="mt-4 text-slate-500">Loading research…</p>
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
              <h1 className="mt-4 text-3xl font-bold text-slate-950">Research CMS</h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Add publications, journal details, and research achievements.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-100 p-4 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Entries</p>
                <p className="mt-3 text-3xl font-semibold text-slate-950">{totalResearch}</p>
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
              <h2 className="text-xl font-semibold text-slate-900">Add new research</h2>
              <p className="mt-2 text-sm text-slate-500">Capture your research work with publication details and status.</p>
            </div>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Research title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Journal / publisher</label>
                <input
                  type="text"
                  value={formData.journal}
                  onChange={(e) => setFormData({ ...formData, journal: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Journal name"
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
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as Research['status'] })}
                    className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  >
                    <option value="published">Published</option>
                    <option value="in-progress">In progress</option>
                    <option value="submitted">Submitted</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Link</label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Publication URL"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full min-h-[120px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                  placeholder="Paper summary or highlights"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-slate-700">Co-authors</label>
                  <button
                    onClick={addAuthorField}
                    className="text-sky-600 hover:text-sky-700 text-sm font-semibold"
                  >
                    + Add author
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  {formData.coAuthors.map((author, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => handleAuthorChange(index, e.target.value)}
                        className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                        placeholder="Co-author name"
                      />
                      {formData.coAuthors.length > 1 && (
                        <button
                          onClick={() => removeAuthorField(index)}
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
                onClick={handleAddResearch}
                className="inline-flex items-center justify-center rounded-3xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
              >
                Save research item
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {research.length === 0 ? (
              <div className="rounded-[32px] border border-dashed border-slate-200 bg-white/90 p-10 text-center text-slate-500 shadow-sm">
                <p className="text-lg font-semibold text-slate-900">No research entries yet</p>
                <p className="mt-2 text-sm">Publish your research work to the portfolio page.</p>
              </div>
            ) : (
              <div className="grid gap-6">
                {research.map((item) => (
                  <div
                    key={item._id || item.title}
                    className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xl font-semibold text-slate-900">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.journal || 'No journal specified'}</p>
                        <p className="mt-2 text-sm text-slate-500">{item.year}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {editingId === item._id ? (
                          <>
                            <button
                              onClick={() => item._id && handleUpdateResearch(item._id)}
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
                                  if (itemId) handleDeleteResearch(itemId);
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
                        <input
                          type="text"
                          value={item.journal || ''}
                          onChange={(e) => updateItemField(item._id || '', 'journal', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Journal"
                        />
                        <div className="grid gap-4 sm:grid-cols-2">
                          <input
                            type="number"
                            value={item.year}
                            onChange={(e) => updateItemField(item._id || '', 'year', Number(e.target.value))}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          />
                          <select
                            value={item.status}
                            onChange={(e) => updateItemField(item._id || '', 'status', e.target.value as Research['status'])}
                            className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          >
                            <option value="published">Published</option>
                            <option value="in-progress">In progress</option>
                            <option value="submitted">Submitted</option>
                          </select>
                        </div>
                        <input
                          type="url"
                          value={item.link || ''}
                          onChange={(e) => updateItemField(item._id || '', 'link', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Link"
                        />
                        <textarea
                          value={item.description || ''}
                          onChange={(e) => updateItemField(item._id || '', 'description', e.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                          placeholder="Description"
                          rows={4}
                        />
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-slate-700">Co-authors</p>
                            <button
                              onClick={() => item._id && addAuthorItem(item._id)}
                              className="text-sky-600 hover:text-sky-700 text-sm font-semibold"
                            >
                              + Add author
                            </button>
                          </div>
                          {(item.coAuthors || []).map((author, index) => (
                            <div key={index} className="flex gap-2">
                              <input
                                type="text"
                                value={author}
                                onChange={(e) => item._id && updateAuthorItem(item._id, index, e.target.value)}
                                className="flex-1 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none"
                                placeholder="Co-author name"
                              />
                              <button
                                onClick={() => item._id && removeAuthorItem(item._id, index)}
                                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-6 space-y-3">
                        <p className="text-sm leading-7 text-slate-600">{item.description || 'No summary provided.'}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noreferrer" className="text-sky-600 hover:text-sky-800 text-sm font-medium">
                            View link
                          </a>
                        )}
                      </div>
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
