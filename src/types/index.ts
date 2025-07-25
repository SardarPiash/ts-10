// Top-level interface for the entire JSON response
interface ApiResponse {
  code: number;
  data: CourseData;
  error: any[]; // Assuming error is an array of any type, as it's empty in the provided JSON
  message: string;
  payload: any[]; // Assuming payload is an array of any type, as it's empty in the provided JSON
  status_code: number;
}

// Interface for the main course data
interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Media[];
  checklist: ChecklistItem[];
  seo: any[]; // Assuming seo is an array of any type, as it's empty in the provided JSON
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[]; // Assuming secondary_cta_group is an array of any type, as it's empty
  delivery_method: string;
}

// Interface for old_info
interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

// Interface for media items
interface Media {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

// Interface for checklist items
interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

// Interface for cta_text
interface CtaText {
  name: string;
  value: string;
}

// Interface for sections
interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

// Interface for section values (varies by section type)
interface SectionValue {
  // Common properties for different section types
  id?: string;
  title?: string;
  description?: string;
  icon?: string;
  subtitle?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  text?: string;
  has_instructor_page?: boolean;
  image?: string;
  name?: string;
  short_description?: string;
  slug?: string;
  background?: Background;
  cta?: Cta;
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;
  color?: string;
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  checklist?: string[];
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  answer?: string;
  question?: string;
}

// Interface for background in group_join_engagement section
interface Background {
  image: string;
  primary_color: string;
  secondary_color: string;
}

// Interface for cta in group_join_engagement section
interface Cta {
  clicked_url: string;
  color: string;
  text: string;
}