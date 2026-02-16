/**
 * GET /api/creators/[slug] – Single creator by slug (POC mock).
 */
import { NextRequest, NextResponse } from 'next/server';
import { getCreatorBySlug, getContentsByCreatorId } from '@/lib/mock-data';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);
  if (!creator) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  const shorts = getContentsByCreatorId(creator.id);
  return NextResponse.json({ ...creator, shorts });
}
