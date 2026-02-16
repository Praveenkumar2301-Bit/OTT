'use client';

import { useMemo } from 'react';
import type { Content } from '@/lib/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { contentTitle } from '@/lib/i18n';

interface VideoPlayerProps {
  content: Content;
}

/**
 * Embedded video player. Supports YouTube embeds; architecture allows HLS in future.
 */
export function VideoPlayer({ content }: VideoPlayerProps) {
  const { lang } = useLanguage();
  const isYouTube = content.videoType === 'youtube';
  const embedUrl = useMemo(() => {
    if (isYouTube && content.videoUrl) {
      const url = new URL(content.videoUrl);
      return url.toString();
    }
    return content.videoUrl;
  }, [content.videoUrl, isYouTube]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
      {isYouTube ? (
        <iframe
          src={embedUrl}
          title={contentTitle(content, lang)}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <video
          className="w-full h-full"
          controls
          poster={content.thumbnailUrl}
          src={content.videoType === 'html5' ? content.videoUrl : undefined}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
