var metadata = require('./routes/metadata.js')
var user = require('./routes/whoami.js')
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

// Whoami endpoint
Sandbox.define('/whoami/','GET', user.whoami)


// V3 endpoint
Sandbox.define('/v3/feature-flag','GET', v3.featureFlag)
Sandbox.define('/v3/company/*','GET', v3.company)
Sandbox.define('/v3/interaction/','GET', v3.interaction)


// Dashboard endpoint
Sandbox.define('/dashboard/homepage/','GET', dashboard.homePage)
