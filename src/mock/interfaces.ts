export interface Issue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id?: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_ur: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
  },
  labels: [
    {
      id: number
      node_id: string
      url: string
      name: string
      color: string
      default: boolean
      description?: string
    }
  ],
  state: string
  locked: boolean
  assignee: null
  assignees: []
  milestone: null
  comments: 2
  created_at: string
  updated_at: string
  closed_at: null
  author_association: string
  active_lock_reason: null
  body: string
  reactions: {
    url: string,
    total_count: number
    "+1": number
    "-1": number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  },
  timeline_url: string
  performed_via_github_app: null
  state_reason: null
}