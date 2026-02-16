/**
 * GET /api/content/[slug] – Single content by slug (POC mock).
 */
import { NextRequest, NextResponse } from 'next/server';
import { getContentBySlug } from '@/lib/mock-data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(content);
}
