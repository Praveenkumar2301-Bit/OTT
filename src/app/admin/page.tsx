'use client';

import { useState } from 'react';
import { Upload, BarChart3, Film, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CONTENTS, CREATORS } from '@/lib/mock-data';
import { formatCount, formatINR } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { contentTitle, creatorName } from '@/lib/i18n';

// Mock stats for admin dashboard
const MOCK_STATS = {
  totalContent: CONTENTS.length,
  pendingApprovals: 2,
  totalViews: CONTENTS.reduce((s, c) => s + c.viewCount, 0),
  totalRevenue: CONTENTS.reduce((s, c) => s + c.revenue, 0),
  viewsChart: [
    { label: 'Jan', value: 120 },
    { label: 'Feb', value: 180 },
    { label: 'Mar', value: 220 },
    { label: 'Apr', value: 190 },
    { label: 'May', value: 280 },
  ],
  revenueChart: [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 62 },
    { label: 'Mar', value: 78 },
    { label: 'Apr', value: 55 },
    { label: 'May', value: 92 },
  ],
};

type Tab = 'upload' | 'stats' | 'content';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('stats');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [rejected, setRejected] = useState<Set<string>>(new Set());
  const { t, lang } = useLanguage();

  const handleMockUpload = (e: React.FormEvent) => {
    e.preventDefault();
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const pendingItems = CONTENTS.filter((c) => c.status === 'approved').slice(0, 4);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold text-white mb-2">
          {t.adminTitle}
        </h1>
        <p className="text-zentra-muted mb-8">
          {t.adminSubtitle}
        </p>

        <div className="flex gap-2 border-b border-zentra-border/50 mb-8">
          {(
            [
              { id: 'stats' as Tab, label: t.tabStats, icon: BarChart3 },
              { id: 'upload' as Tab, label: t.tabUpload, icon: Upload },
              { id: 'content' as Tab, label: t.tabContent, icon: Film },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === id
                  ? 'border-zentra-gold text-zentra-gold'
                  : 'border-transparent text-zentra-muted hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'stats' && (
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
                <p className="text-xs font-medium text-zentra-gold uppercase tracking-wider">
                  {t.totalContent}
                </p>
                <p className="text-2xl font-bold text-white mt-1">
                  {MOCK_STATS.totalContent}
                </p>
              </div>
              <div className="rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
                <p className="text-xs font-medium text-zentra-gold uppercase tracking-wider">
                  {t.pendingApprovals}
                </p>
                <p className="text-2xl font-bold text-white mt-1">
                  {MOCK_STATS.pendingApprovals}
                </p>
              </div>
              <div className="rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
                <p className="text-xs font-medium text-zentra-gold uppercase tracking-wider">
                  {t.totalViews}
                </p>
                <p className="text-2xl font-bold text-white mt-1">
                  {formatCount(MOCK_STATS.totalViews)}
                </p>
              </div>
              <div className="rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
                <p className="text-xs font-medium text-zentra-gold uppercase tracking-wider">
                  {t.totalRevenue}
                </p>
                <p className="text-2xl font-bold text-white mt-1">
                  {formatINR(MOCK_STATS.totalRevenue)}
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
                <h3 className="font-semibold text-white mb-4">{t.mockChartViews}</h3>
                <div className="flex items-end gap-2 h-40">
                  {MOCK_STATS.viewsChart.map((d) => (
                    <div
                      key={d.label}
                      className="flex-1 bg-zentra-gold/30 rounded-t min-h-[4px]"
                      style={{ height: `${(d.value / 300) * 100}%` }}
                      title={String(d.value)}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-zentra-muted">
                  {MOCK_STATS.viewsChart.map((d) => (
                    <span key={d.label}>{d.label}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
                <h3 className="font-semibold text-white mb-4">{t.mockChartRevenue}</h3>
                <div className="flex items-end gap-2 h-40">
                  {MOCK_STATS.revenueChart.map((d) => (
                    <div
                      key={d.label}
                      className="flex-1 bg-zentra-gold/50 rounded-t min-h-[4px]"
                      style={{ height: `${(d.value / 100) * 100}%` }}
                      title={String(d.value)}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-zentra-muted">
                  {MOCK_STATS.revenueChart.map((d) => (
                    <span key={d.label}>{d.label}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="max-w-xl">
            <form onSubmit={handleMockUpload} className="space-y-4 rounded-xl bg-zentra-card border border-zentra-border/50 p-6">
              <p className="text-sm text-zentra-muted mb-4">
                {t.uploadFormNote}
              </p>
              <div>
                <label className="block text-sm font-medium text-zentra-muted mb-1">
                  {t.formTitle}
                </label>
                <input
                  type="text"
                  placeholder={t.formTitlePlaceholder}
                  className="w-full rounded-lg bg-zentra-bg border border-zentra-border px-4 py-2 text-white placeholder:text-zentra-muted/80 focus:outline-none focus:ring-2 focus:ring-zentra-gold"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zentra-muted mb-1">
                  {t.formDescription}
                </label>
                <textarea
                  placeholder={t.formDescriptionPlaceholder}
                  rows={3}
                  className="w-full rounded-lg bg-zentra-bg border border-zentra-border px-4 py-2 text-white placeholder:text-zentra-muted/80 focus:outline-none focus:ring-2 focus:ring-zentra-gold resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zentra-muted mb-1">
                  {t.formDirector}
                </label>
                <select className="w-full rounded-lg bg-zentra-bg border border-zentra-border px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zentra-gold">
                  {CREATORS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {creatorName(c, lang)}
                    </option>
                  ))}
                </select>
              </div>
              <Button type="submit" variant="gold" size="lg">
                {t.submitMock}
              </Button>
              {uploadSuccess && (
                <p className="text-sm text-green-400">{t.uploadSuccess}</p>
              )}
            </form>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="rounded-xl bg-zentra-card border border-zentra-border/50 overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-zentra-border/50">
                  <th className="px-6 py-4 text-xs font-medium text-zentra-gold uppercase tracking-wider">
                    {t.tableTitle}
                  </th>
                  <th className="px-6 py-4 text-xs font-medium text-zentra-gold uppercase tracking-wider">
                    {t.tableDirector}
                  </th>
                  <th className="px-6 py-4 text-xs font-medium text-zentra-gold uppercase tracking-wider">
                    {t.tableStatus}
                  </th>
                  <th className="px-6 py-4 text-xs font-medium text-zentra-gold uppercase tracking-wider">
                    {t.tableActions}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pendingItems.map((c) => {
                  const director = CREATORS.find((cr) => cr.id === c.directorId);
                  const isRejected = rejected.has(c.id);
                  return (
                    <tr
                      key={c.id}
                      className={`border-b border-zentra-border/30 ${isRejected ? 'opacity-50' : ''}`}
                    >
                      <td className="px-6 py-4 text-white font-medium">{contentTitle(c, lang)}</td>
                      <td className="px-6 py-4 text-zentra-muted">{creatorName(director, lang) || '–'}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                          {c.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button
                          type="button"
                          className="p-1.5 rounded text-green-400 hover:bg-green-500/20"
                          title={t.approve}
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setRejected((prev) => new Set(prev).add(c.id))}
                          className="p-1.5 rounded text-red-400 hover:bg-red-500/20"
                          title={t.reject}
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="px-6 py-3 text-xs text-zentra-muted/90 border-t border-zentra-border/30">
              {t.rejectDummyNote}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
