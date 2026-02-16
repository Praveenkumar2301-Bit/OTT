/**
 * GET /api/content – List all content (POC mock).
 * Architecture ready for DB: replace with PostgreSQL/SQLite query.
 */
import { NextResponse } from 'next/server';
import { getContentsWithCreators } from '@/lib/mock-data';

export async function GET() {
  try {
    const content = getContentsWithCreators();
    return NextResponse.json(content);
  } catch (e) {
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}
