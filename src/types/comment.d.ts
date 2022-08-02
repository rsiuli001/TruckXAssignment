export interface Comment {
  kind: string;
  data: CommentData;
}

export interface CommentData {
  subreddit_id: string;
  approved_at_utc: string;
  author_is_blocked: boolean;
  comment_type: string;
  link_title: string;
  mod_reason_by: string;
  banned_by: string;
  ups: number;
  num_reports: string;
  author_flair_type: string;
  total_awards_received: number;
  subreddit: string;
  link_author: string;
  likes: string;
  replies: '';
  user_reports: any[];
  saved: boolean;
  id: string;
  banned_at_utc: string;
  mod_reason_title: string;
  gilded: number;
  archived: boolean;
  collapsed_reason_code: string;
  no_follow: boolean;
  author: string;
  num_comments: number;
  can_mod_post: boolean;
  send_replies: boolean;
  parent_id: string;
  score: number;
  author_fullname: string;
  over_18: boolean;
  report_reasons: string;
  removal_reason: string;
  approved_by: string;
  controversiality: number;
  body: string;
  edited: boolean;
  top_awarded_type: string;
  downs: number;
  author_flair_css_class: string;
  is_submitter: boolean;
  collapsed: boolean;
  author_flair_richtext: any[];
  author_patreon_flair: boolean;
  body_html: string;
  gildings: any;
  collapsed_reason: string;
  distinguished: string;
  associated_award: string;
  stickied: boolean;
  author_premium: boolean;
  can_gild: boolean;
  link_id: string;
  unrepliable_reason: string;
  author_flair_text_color: string;
  score_hidden: boolean;
  permalink: string;
  subreddit_type: string;
  link_permalink: string;
  name: string;
  author_flair_template_id: string;
  subreddit_name_prefixed: string;
  author_flair_text: string;
  treatment_tags: any[];
  created: number;
  created_utc: number;
  awarders: any[];
  all_awardings: any[];
  locked: boolean;
  author_flair_background_color: string;
  collapsed_because_crowd_control: string;
  mod_reports: any[];
  quarantine: boolean;
  mod_note: string;
  link_url: string;
}
