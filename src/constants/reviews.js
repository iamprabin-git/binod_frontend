export const REVIEW_STATUS = {
  PUBLISHED: 'published',
  PENDING: 'pending',
  REJECTED: 'rejected'
};

export const REVIEW_STATUS_OPTIONS = [
  { value: 'all', label: 'All Reviews' },
  { value: REVIEW_STATUS.PUBLISHED, label: 'Published' },
  { value: REVIEW_STATUS.PENDING, label: 'Pending' },
  { value: REVIEW_STATUS.REJECTED, label: 'Rejected' }
];

export const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'oldest', label: 'Oldest First' },
  { value: 'highest', label: 'Highest Rating' },
  { value: 'lowest', label: 'Lowest Rating' }
];

export const REVIEWS_DATA = [
  {
    id: '1',
    user: {
      name: 'Alex Johnson',
      avatar: '/avatars/avatar1.jpg',
      location: 'New York, USA'
    },
    tour: {
      id: 'tour-101',
      title: 'Bali Adventure Tour',
      date: '2023-05-15'
    },
    rating: 5,
    comment: 'Absolutely amazing experience! Our guide was knowledgeable and made the trip unforgettable. The scenery was breathtaking and the activities were perfectly planned.',
    status: REVIEW_STATUS.PUBLISHED,
    createdAt: '2023-05-20'
  },
  {
    id: '2',
    user: {
      name: 'Sarah Miller',
      avatar: '/avatars/avatar2.jpg',
      location: 'London, UK'
    },
    tour: {
      id: 'tour-204',
      title: 'Cultural Heritage Walk',
      date: '2023-06-10'
    },
    rating: 4,
    comment: 'Great tour with lots of historical insights. The guide was very passionate about the local culture. Would have loved more time at the museum.',
    status: REVIEW_STATUS.PUBLISHED,
    createdAt: '2023-06-15'
  },
  {
    id: '3',
    user: {
      name: 'James Wilson',
      avatar: '/avatars/avatar3.jpg',
      location: 'Sydney, Australia'
    },
    tour: {
      id: 'tour-305',
      title: 'Mountain Trekking Expedition',
      date: '2023-07-05'
    },
    rating: 5,
    comment: 'Challenging but incredibly rewarding experience. Our guide was extremely professional and ensured our safety throughout the trek. The views were worth every step!',
    status: REVIEW_STATUS.PUBLISHED,
    createdAt: '2023-07-10'
  },
  {
    id: '4',
    user: {
      name: 'Emma Thompson',
      avatar: '/avatars/avatar4.jpg',
      location: 'Toronto, Canada'
    },
    tour: {
      id: 'tour-102',
      title: 'Beach Paradise Getaway',
      date: '2023-08-12'
    },
    rating: 3,
    comment: 'The beaches were beautiful but the tour felt a bit rushed. Could have used more free time to relax. The guide was friendly but not very informative.',
    status: REVIEW_STATUS.PENDING,
    createdAt: '2023-08-18'
  },
  {
    id: '5',
    user: {
      name: 'Michael Chen',
      avatar: '/avatars/avatar5.jpg',
      location: 'Singapore'
    },
    tour: {
      id: 'tour-401',
      title: 'Wildlife Safari Adventure',
      date: '2023-09-03'
    },
    rating: 4,
    comment: 'Saw so many amazing animals in their natural habitat! The guide was incredibly knowledgeable about wildlife. The only downside was the long travel time between locations.',
    status: REVIEW_STATUS.REJECTED,
    createdAt: '2023-09-08'
  }
];