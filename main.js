var adviser = require('./routes/adviser.js')
var dashboard = require('./routes/dashboard.js')
var metadata = require('./routes/metadata.js')
var user = require('./routes/whoami.js')
var v3Company = require('./routes/v3/company/company.js')
var v3Contact = require('./routes/v3/contact/contact.js')
var v3FeatureFlag = require('./routes/v3/feature-flag/feature-flag.js')
var v3Interaction = require('./routes/v3/interaction/interaction.js')
var v3Investment = require('./routes/v3/investment/investment.js')
var v3SearchCompany = require('./routes/v3/search/company.js')
var v3SearchContact = require('./routes/v3/search/contact.js')
var v3SearchEvent = require('./routes/v3/search/event.js')
var v3SearchInvestmentProject = require('./routes/v3/search/investment-project.js')

// Adviser endpoint
Sandbox.define('/adviser/','GET', adviser.advisers)
Sandbox.define('/adviser/{id}/','GET', adviser.singleAdviser)

// Dashboard endpoint
Sandbox.define('/dashboard/homepage/','GET', dashboard.homePage)

// Metadata endpoint
Sandbox.define('/metadata/likelihood-to-land/','GET', metadata.likelihoodToLand)
Sandbox.define('/metadata/export-experience-category/','GET', metadata.exportExperienceCategory)
Sandbox.define('/metadata/investment-investor-type/','GET', metadata.investmentInvestorType)
Sandbox.define('/metadata/investment-involvement/','GET', metadata.investmentInvolvement)
Sandbox.define('/metadata/investment-specific-programme/','GET', metadata.investmentSpecificProgramme)
Sandbox.define('/metadata/investment-project-stage/','GET', metadata.investmentProjectStage)
Sandbox.define('/metadata/investment-business-activity/','GET', metadata.investmentBusinessActivity)
Sandbox.define('/metadata/investment-type/','GET', metadata.investmentType)
Sandbox.define('/metadata/investment-strategic-driver/','GET', metadata.investmentStrategicDriver)
Sandbox.define('/metadata/order-service-type/','GET', metadata.orderServiceType)
Sandbox.define('/metadata/order-cancellation-reason/','GET', metadata.orderCancellationReason)
Sandbox.define('/metadata/omis-market/','GET', metadata.omisMarket)
Sandbox.define('/metadata/salary-range/','GET', metadata.salaryRange)
Sandbox.define('/metadata/fdi-value/','GET', metadata.fdiValue)
Sandbox.define('/metadata/fdi-type/','GET', metadata.fdiType)
Sandbox.define('/metadata/turnover/','GET', metadata.turnover)
Sandbox.define('/metadata/sector/','GET', metadata.sector)
Sandbox.define('/metadata/location-type/','GET', metadata.locationType)
Sandbox.define('/metadata/event-type/','GET', metadata.eventType)
Sandbox.define('/metadata/programme/','GET', metadata.programme)
Sandbox.define('/metadata/business-type/','GET', metadata.businessType)
Sandbox.define('/metadata/evidence-tag/','GET', metadata.evidenceTag)
Sandbox.define('/metadata/employee-range/','GET', metadata.employeeRange)
Sandbox.define('/metadata/country/','GET', metadata.country)
Sandbox.define('/metadata/uk-region/','GET', metadata.ukRegion)
Sandbox.define('/metadata/referral-source-website/','GET', metadata.referralSourceWebsite)
Sandbox.define('/metadata/referral-source-marketing/','GET', metadata.referralSourceMarketing)
Sandbox.define('/metadata/referral-source-activity/','GET', metadata.referralSourceActivity)
Sandbox.define('/metadata/headquarter-type/','GET', metadata.headquarterType)
Sandbox.define('/metadata/service/','GET', metadata.service)
Sandbox.define('/metadata/communication-channel/','GET', metadata.communicationChannel)
Sandbox.define('/metadata/team/','GET', metadata.team)
Sandbox.define('/metadata/policy-area/','GET', metadata.policyArea)
Sandbox.define('/metadata/policy-issue-type/','GET', metadata.policyIssueType)
Sandbox.define('/metadata/service-delivery-status/','GET', metadata.serviceDeliveryStatus)

// V3 Company
Sandbox.define('/v3/company/{companyId}','GET', v3Company.company)
Sandbox.define('/v3/company','GET', v3Company.companies)

// V3 Contact
Sandbox.define('/v3/contact','GET', v3Contact.contact)
Sandbox.define('/v3/contact/{contactId}','GET', v3Contact.contactById)

// V3 Feature Flag
Sandbox.define('/v3/feature-flag','GET', v3FeatureFlag.featureFlag)

// V3 Interaction
Sandbox.define('/v3/interaction','GET', v3Interaction.interactions)
Sandbox.define('/v3/interaction/{id}','GET', v3Interaction.interactionById)
Sandbox.define('/v3/interaction','POST', v3Interaction.interactionCreate)

// V3 Investment
Sandbox.define('/v3/investment/{id}','GET', v3Investment.investmentProject)

// V3 Search
Sandbox.define('/v3/search/company','POST', v3SearchCompany.companies)
Sandbox.define('/v3/search/contact','POST', v3SearchContact.contacts)
Sandbox.define('/v3/search/event','POST', v3SearchEvent.events)
Sandbox.define('/v3/search/investment_project','POST', v3SearchInvestmentProject.investmentProjects)

// Whoami endpoint
Sandbox.define('/whoami/','GET', user.whoami)
