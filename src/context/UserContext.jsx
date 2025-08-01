import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    company: 'TechCorp',
    industry: 'Technology'
  })

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Summer Sale 2024',
      budget: 50000,
      start_date: '2024-01-15',
      end_date: '2024-02-15',
      status: 'active',
      ads: [
        {
          id: 1,
          name: 'Tech Product Ad',
          type: 'video',
          template_id: 1,
          personalization_data: { industry: 'tech', audience: 'professionals' }
        }
      ]
    },
    {
      id: 2,
      name: 'Black Friday Campaign',
      budget: 75000,
      start_date: '2024-02-20',
      end_date: '2024-03-20',
      status: 'draft',
      ads: []
    }
  ])

  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: 'Professional Product Showcase',
      type: 'product',
      composition: 'hero_product_features',
      personalization_rules: ['industry_specific_messaging', 'audience_targeting']
    },
    {
      id: 2,
      name: 'Service Announcement',
      type: 'service',
      composition: 'service_benefits_cta',
      personalization_rules: ['geographic_targeting', 'demographic_personalization']
    },
    {
      id: 3,
      name: 'Brand Story Builder',
      type: 'brand',
      composition: 'brand_narrative_emotional',
      personalization_rules: ['brand_voice_adaptation', 'cultural_personalization']
    }
  ])

  const addCampaign = (campaign) => {
    const newCampaign = {
      ...campaign,
      id: Date.now(),
      ads: []
    }
    setCampaigns(prev => [...prev, newCampaign])
  }

  const updateCampaign = (id, updates) => {
    setCampaigns(prev => 
      prev.map(campaign => 
        campaign.id === id ? { ...campaign, ...updates } : campaign
      )
    )
  }

  const value = {
    user,
    campaigns,
    templates,
    addCampaign,
    updateCampaign,
    setCampaigns,
    setTemplates
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}