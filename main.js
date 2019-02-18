var metadata = require('./routes/metadata.js')
var user = require('./routes/whoami.js')
var adviser = require('./routes/adviser.js')
var v3 = require('./routes/v3.js')
var dashboard = require('./routes/dashboard.js')

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


// Whoami endpoint
Sandbox.define('/whoami/','GET', user.whoami)


// Adviser endpoint
Sandbox.define('/adviser/','GET', adviser.advisers)
Sandbox.define('/adviser/{id}/','GET', adviser.singleAdviser)


// V3 endpoint
Sandbox.define('/v3/feature-flag','GET', v3.featureFlag)
Sandbox.define('/v3/company','GET', v3.company)
Sandbox.define('/v3/interaction','GET', v3.interaction)
Sandbox.define('/v3/interaction/{id}','GET', v3.singleInteraction)
Sandbox.define('/v3/contact/{contactId}','GET', v3.singleContact)
Sandbox.define('/v3/company/{companyId}','GET', v3.singleCompany)
Sandbox.define('/v3/investment/{id}','GET', v3.singleInvestmnetPorject)
Sandbox.define('/v3/contact','GET', v3.contact)
Sandbox.define('/v3/search/contact','POST', v3.contacts)
Sandbox.define('/v3/search/company','POST', v3.companies)
Sandbox.define('/v3/search/event','POST', v3.events)
Sandbox.define('/v3/search/investment_project','POST', v3.investmnetPorject)
Sandbox.define('/v3/interaction','POST', v3.createInteraction)


// Dashboard endpoint
Sandbox.define('/dashboard/homepage/','GET', dashboard.homePage)
