export interface PostData {
  all_awardings: any[];
  allow_live_comments: boolean;
  approved_at_utc: string;
  approved_by: string;
  archived: boolean;
  author: string;
  author_flair_background_color: string;
  author_flair_css_class: string;
  author_flair_richtext: any[];
  author_flair_template_id: string;
  author_flair_text: string;
  author_flair_text_color: string;
  author_flair_type: string;
  author_fullname: string;
  author_is_blocked: boolean;
  author_patreon_flair: boolean;
  author_premium: boolean;
  awarders: any[];
  banned_at_utc: string;
  banned_by: string;
  can_gild: boolean;
  can_mod_post: boolean;
  category: string;
  clicked: boolean;
  content_categories: string;
  contest_mode: boolean;
  created: 1659340881;
  created_utc: 1659340881;
  discussion_type: string;
  distinguished: string;
  domain: string;
  downs: 0;
  edited: boolean;
  gilded: 0;
  gildings: { gid_1: 7 };
  hidden: boolean;
  hide_score: boolean;
  id: string;
  is_created_from_ads_ui: boolean;
  is_crosspostable: boolean;
  is_meta: boolean;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_robot_indexable: boolean;
  is_self: boolean;
  is_video: boolean;
  likes: string;
  link_flair_background_color: string;
  link_flair_css_class: string;
  link_flair_richtext: any[];
  link_flair_text: string;
  link_flair_text_color: string;
  link_flair_type: string;
  locked: boolean;
  media: string;
  media_embed: any;
  media_only: boolean;
  mod_note: string;
  mod_reason_by: string;
  mod_reason_title: string;
  mod_reports: any[];
  name: string;
  no_follow: boolean;
  num_comments: number;
  num_crossposts: number;
  num_reports: string;
  over_18: boolean;
  parent_whitelist_status: string;
  permalink: string;
  pinned: boolean;
  post_hint: string;
  preview: { images: any[]; enabled: boolean };
  pwls: number;
  quarantine: boolean;
  removal_reason: string;
  removed_by: string;
  removed_by_category: string;
  report_reasons: string;
  saved: boolean;
  score: number;
  secure_media: string;
  secure_media_embed: any;
  selftext: string;
  selftext_html: string;
  send_replies: boolean;
  spoiler: boolean;
  stickied: boolean;
  subreddit: string;
  subreddit_id: string;
  subreddit_name_prefixed: string;
  subreddit_subscribers: 2326531;
  subreddit_type: string;
  suggested_sort: string;
  thumbnail: string;
  thumbnail_height: number;
  thumbnail_width: number;
  title: string;
  top_awarded_type: string;
  total_awards_received: 18;
  treatment_tags: any[];
  ups: number;
  upvote_ratio: number;
  url: string;
  url_overridden_by_dest: string;
  user_reports: any[];
  view_count: string;
  visited: boolean;
  whitelist_status: string;
  wls: number;
}

export interface Post {
  data: PostData;
  kind: string;
}