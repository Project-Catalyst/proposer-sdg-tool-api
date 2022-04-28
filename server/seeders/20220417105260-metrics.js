
'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Metrics', [{"id":"1.1.1","title":"Proportion of the population living below the international poverty line by sex, age, employment status and geographic location (urban/rural)","SubgoalId":"1.1"},{"id":"1.2.1","title":"Proportion of population living below the national poverty line, by sex and age","SubgoalId":"1.2"},{"id":"1.2.2","title":"Proportion of men, women and children of all ages living in poverty in all its dimensions according to national definitions","SubgoalId":"1.2"},{"id":"1.3.1","title":"Proportion of population covered by social protection floors/systems, by sex, distinguishing children, unemployed persons, older persons, persons with disabilities, pregnant women, newborns, work-injury victims and the poor and the vulnerable","SubgoalId":"1.3"},{"id":"1.4.1","title":"Proportion of population living in households with access to basic services","SubgoalId":"1.4"},{"id":"1.4.2","title":"Proportion of total adult population with secure tenure rights to land, (a) with legally recognized documentation, and (b) who perceive their rights to land as secure, by sex and type of tenure","SubgoalId":"1.4"},{"id":"1.5.1","title":"Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population","SubgoalId":"1.5"},{"id":"1.5.2","title":"Direct economic loss attributed to disasters in relation to global gross domestic product (GDP)","SubgoalId":"1.5"},{"id":"1.5.3","title":"Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030","SubgoalId":"1.5"},{"id":"1.5.4","title":"Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies","SubgoalId":"1.5"},{"id":"1.a.1","title":"Total official development assistance grants from all donors that focus on poverty reduction as a share of the recipient country’s gross national income","SubgoalId":"1.a"},{"id":"1.a.2","title":"Proportion of total government spending on essential services (education, health and social protection)","SubgoalId":"1.a"},{"id":"1.b.1","title":"Pro-poor public social spending","SubgoalId":"1.b"},{"id":"2.1.1","title":"Prevalence of undernourishment","SubgoalId":"2.1"},{"id":"2.1.2","title":"Prevalence of moderate or severe food insecurity in the population, based on the Food Insecurity Experience Scale (FIES)","SubgoalId":"2.1"},{"id":"2.2.1","title":"Prevalence of stunting (height for age <-2 standard deviation from the median of the World Health Organization (WHO) Child Growth Standards) among children under 5 years of age","SubgoalId":"2.2"},{"id":"2.2.2","title":"Prevalence of malnutrition (weight for height >+2 or <-2 standard deviation from the median of the WHO Child Growth Standards) among children under 5 years of age, by type (wasting and overweight)","SubgoalId":"2.2"},{"id":"2.2.3","title":"Prevalence of anaemia in women aged 15 to 49 years, by pregnancy status (percentage)","SubgoalId":"2.2"},{"id":"2.3.1","title":"Volume of production per labour unit by classes of farming/pastoral/forestry enterprise size","SubgoalId":"2.3"},{"id":"2.3.2","title":"Average income of small-scale food producers, by sex and indigenous status","SubgoalId":"2.3"},{"id":"2.4.1","title":"Proportion of agricultural area under productive and sustainable agriculture","SubgoalId":"2.4"},{"id":"2.5.1","title":"Number of (a) plant and (b) animal genetic resources for food and agriculture secured in either medium- or long-term conservation facilities","SubgoalId":"2.5"},{"id":"2.5.2","title":"Proportion of local breeds classified as being at risk of extinction","SubgoalId":"2.5"},{"id":"2.a.1","title":"The agriculture orientation index for government expenditures","SubgoalId":"2.a"},{"id":"2.a.2","title":"Total official flows (official development assistance plus other official flows) to the agriculture sector","SubgoalId":"2.a"},{"id":"2.b.1","title":"Agricultural export subsidies","SubgoalId":"2.b"},{"id":"2.c.1","title":"Indicator of food price anomalies","SubgoalId":"2.c"},{"id":"3.1.1","title":"Maternal mortality ratio","SubgoalId":"3.1"},{"id":"3.1.2","title":"Proportion of births attended by skilled health personnel","SubgoalId":"3.1"},{"id":"3.2.1","title":"Under‑5 mortality rate","SubgoalId":"3.2"},{"id":"3.2.2","title":"Neonatal mortality rate","SubgoalId":"3.2"},{"id":"3.3.1","title":"Number of new HIV infections per 1,000 uninfected population, by sex, age and key populations","SubgoalId":"3.3"},{"id":"3.3.2","title":"Tuberculosis incidence per 100,000 population","SubgoalId":"3.3"},{"id":"3.3.3","title":"Malaria incidence per 1,000 population","SubgoalId":"3.3"},{"id":"3.3.4","title":"Hepatitis B incidence per 100,000 population","SubgoalId":"3.3"},{"id":"3.3.5","title":"Number of people requiring interventions against neglected tropical diseases","SubgoalId":"3.3"},{"id":"3.4.1","title":"Mortality rate attributed to cardiovascular disease, cancer, diabetes or chronic respiratory disease","SubgoalId":"3.4"},{"id":"3.4.2","title":"Suicide mortality rate","SubgoalId":"3.4"},{"id":"3.5.1","title":"Coverage of treatment interventions (pharmacological, psychosocial and rehabilitation and aftercare services) for substance use disorders","SubgoalId":"3.5"},{"id":"3.5.2","title":"Alcohol per capita consumption (aged 15 years and older) within a calendar year in litres of pure alcohol","SubgoalId":"3.5"},{"id":"3.6.1","title":"Death rate due to road traffic injuries","SubgoalId":"3.6"},{"id":"3.7.1","title":"Proportion of women of reproductive age (aged 15–49 years) who have their need for family planning satisfied with modern methods","SubgoalId":"3.7"},{"id":"3.7.2","title":"Adolescent birth rate (aged 10–14 years; aged 15–19 years) per 1,000 women in that age group","SubgoalId":"3.7"},{"id":"3.8.1","title":"Coverage of essential health services","SubgoalId":"3.8"},{"id":"3.8.2","title":"Proportion of population with large household expenditures on health as a share of total household expenditure or income","SubgoalId":"3.8"},{"id":"3.9.1","title":"Mortality rate attributed to household and ambient air pollution","SubgoalId":"3.9"},{"id":"3.9.2","title":"Mortality rate attributed to unsafe water, unsafe sanitation and lack of hygiene (exposure to unsafe Water, Sanitation and Hygiene for All (WASH) services)","SubgoalId":"3.9"},{"id":"3.9.3","title":"Mortality rate attributed to unintentional poisoning","SubgoalId":"3.9"},{"id":"3.a.1","title":"Age-standardized prevalence of current tobacco use among persons aged 15 years and older","SubgoalId":"3.a"},{"id":"3.b.1","title":"Proportion of the target population covered by all vaccines included in their national programme","SubgoalId":"3.b"},{"id":"3.b.2","title":"Total net official development assistance to medical research and basic health sectors","SubgoalId":"3.b"},{"id":"3.b.3","title":"Proportion of health facilities that have a core set of relevant essential medicines available and affordable on a sustainable basis","SubgoalId":"3.b"},{"id":"3.c.1","title":"Health worker density and distribution","SubgoalId":"3.c"},{"id":"3.d.1","title":"International Health Regulations (IHR) capacity and health emergency preparedness","SubgoalId":"3.d"},{"id":"3.d.2","title":"Percentage of bloodstream infections due to selected antimicrobial-resistant organisms","SubgoalId":"3.d"},{"id":"4.1.1","title":"Proportion of children and young people (a) in grades 2/3; (b) at the end of primary; and (c) at the end of lower secondary achieving at least a minimum proficiency level in (i) reading and (ii) mathematics, by sex","SubgoalId":"4.1"},{"id":"4.1.2","title":"Completion rate (primary education, lower secondary education, upper secondary education)","SubgoalId":"4.1"},{"id":"4.2.1","title":"Proportion of children aged 24–59 months who are developmentally on track in health, learning and psychosocial well-being, by sex","SubgoalId":"4.2"},{"id":"4.2.2","title":"Participation rate in organized learning (one year before the official primary entry age), by sex","SubgoalId":"4.2"},{"id":"4.3.1","title":"Participation rate of youth and adults in formal and non-formal education and training in the previous 12 months, by sex","SubgoalId":"4.3"},{"id":"4.4.1","title":"Proportion of youth and adults with information and communications technology (ICT) skills, by type of skill","SubgoalId":"4.4"},{"id":"4.5.1","title":"Parity indices (female/male, rural/urban, bottom/top wealth quintile and others such as disability status, indigenous peoples and conflict-affected, as data become available) for all education indicators on this list that can be disaggregated","SubgoalId":"4.5"},{"id":"4.6.1","title":"Proportion of population in a given age group achieving at least a fixed level of proficiency in functional (a) literacy and (b) numeracy skills, by sex","SubgoalId":"4.6"},{"id":"4.7.1","title":"Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment","SubgoalId":"4.7"},{"id":"4.a.1","title":"Proportion of schools offering basic services, by type of service","SubgoalId":"4.a"},{"id":"4.b.1","title":"Volume of official development assistance flows for scholarships by sector and type of study","SubgoalId":"4.b"},{"id":"4.c.1","title":"Proportion of teachers with the minimum required qualifications, by education level","SubgoalId":"4.c"},{"id":"5.1.1","title":"Whether or not legal frameworks are in place to promote, enforce and monitor equality and non‑discrimination on the basis of sex","SubgoalId":"5.1"},{"id":"5.2.1","title":"Proportion of ever-partnered women and girls aged 15 years and older subjected to physical, sexual or psychological violence by a current or former intimate partner in the previous 12 months, by form of violence and by age","SubgoalId":"5.2"},{"id":"5.2.2","title":"Proportion of women and girls aged 15 years and older subjected to sexual violence by persons other than an intimate partner in the previous 12 months, by age and place of occurrence","SubgoalId":"5.2"},{"id":"5.3.1","title":"Proportion of women aged 20–24 years who were married or in a union before age 15 and before age 18","SubgoalId":"5.3"},{"id":"5.3.2","title":"Proportion of girls and women aged 15–49 years who have undergone female genital mutilation/cutting, by age","SubgoalId":"5.3"},{"id":"5.4.1","title":"Proportion of time spent on unpaid domestic and care work, by sex, age and location","SubgoalId":"5.4"},{"id":"5.5.1","title":"Proportion of seats held by women in (a) national parliaments and (b) local governments","SubgoalId":"5.5"},{"id":"5.5.2","title":"Proportion of women in managerial positions","SubgoalId":"5.5"},{"id":"5.6.1","title":"Proportion of women aged 15–49 years who make their own informed decisions regarding sexual relations, contraceptive use and reproductive health care","SubgoalId":"5.6"},{"id":"5.6.2","title":"Number of countries with laws and regulations that guarantee full and equal access to women and men aged 15 years and older to sexual and reproductive health care, information and education","SubgoalId":"5.6"},{"id":"5.a.1","title":"(a) Proportion of total agricultural population with ownership or secure rights over agricultural land, by sex; and (b) share of women among owners or rights-bearers of agricultural land, by type of tenure","SubgoalId":"5.a"},{"id":"5.a.2","title":"Proportion of countries where the legal framework (including customary law) guarantees women’s equal rights to land ownership and/or control","SubgoalId":"5.a"},{"id":"5.b.1","title":"Proportion of individuals who own a mobile telephone, by sex","SubgoalId":"5.b"},{"id":"5.c.1","title":"Proportion of countries with systems to track and make public allocations for gender equality and women’s empowerment","SubgoalId":"5.c"},{"id":"6.1.1","title":"Proportion of population using safely managed drinking water services","SubgoalId":"6.1"},{"id":"6.2.1","title":"Proportion of population using (a) safely managed sanitation services and (b) a hand-washing facility with soap and water","SubgoalId":"6.2"},{"id":"6.3.1","title":"Proportion of domestic and industrial wastewater flows safely treated","SubgoalId":"6.3"},{"id":"6.3.2","title":"Proportion of bodies of water with good ambient water quality","SubgoalId":"6.3"},{"id":"6.4.1","title":"Change in water-use efficiency over time","SubgoalId":"6.4"},{"id":"6.4.2","title":"Level of water stress: freshwater withdrawal as a proportion of available freshwater resources","SubgoalId":"6.4"},{"id":"6.5.1","title":"Degree of integrated water resources management","SubgoalId":"6.5"},{"id":"6.5.2","title":"Proportion of transboundary basin area with an operational arrangement for water cooperation","SubgoalId":"6.5"},{"id":"6.6.1","title":"Change in the extent of water-related ecosystems over time","SubgoalId":"6.6"},{"id":"6.a.1","title":"Amount of water- and sanitation-related official development assistance that is part of a government-coordinated spending plan","SubgoalId":"6.a"},{"id":"6.b.1","title":"Proportion of local administrative units with established and operational policies and procedures for participation of local communities in water and sanitation management","SubgoalId":"6.b"},{"id":"7.1.1","title":"Proportion of population with access to electricity","SubgoalId":"7.1"},{"id":"7.1.2","title":"Proportion of population with primary reliance on clean fuels and technology","SubgoalId":"7.1"},{"id":"7.2.1","title":"Renewable energy share in the total final energy consumption","SubgoalId":"7.2"},{"id":"7.3.1","title":"Energy intensity measured in terms of primary energy and GDP","SubgoalId":"7.3"},{"id":"7.a.1","title":"International financial flows to developing countries in support of clean energy research and development and renewable energy production, including in hybrid systems","SubgoalId":"7.a"},{"id":"7.b.1","title":"Installed renewable energy-generating capacity in developing countries (in watts per capita)","SubgoalId":"7.b"},{"id":"8.1.1","title":"Annual growth rate of real GDP per capita","SubgoalId":"8.1"},{"id":"8.2.1","title":"Annual growth rate of real GDP per employed person","SubgoalId":"8.2"},{"id":"8.3.1","title":"Proportion of informal employment in total employment, by sector and sex","SubgoalId":"8.3"},{"id":"8.4.1","title":"Material footprint, material footprint per capita, and material footprint per GDP","SubgoalId":"8.4"},{"id":"8.4.2","title":"Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP","SubgoalId":"8.4"},{"id":"8.5.1","title":"Average hourly earnings of employees, by sex, age, occupation and persons with disabilities","SubgoalId":"8.5"},{"id":"8.5.2","title":"Unemployment rate, by sex, age and persons with disabilities","SubgoalId":"8.5"},{"id":"8.6.1","title":"Proportion of youth (aged 15–24 years) not in education, employment or training","SubgoalId":"8.6"},{"id":"8.7.1","title":"Proportion and number of children aged 5–17 years engaged in child labour, by sex and age","SubgoalId":"8.7"},{"id":"8.8.1","title":"Fatal and non-fatal occupational injuries per 100,000 workers, by sex and migrant status","SubgoalId":"8.8"},{"id":"8.8.2","title":"Level of national compliance with labour rights (freedom of association and collective bargaining) based on International Labour Organization (ILO) textual sources and national legislation, by sex and migrant status","SubgoalId":"8.8"},{"id":"8.9.1","title":"Tourism direct GDP as a proportion of total GDP and in growth rate","SubgoalId":"8.9"},{"id":"8.10.1","title":"(a) Number of commercial bank branches per 100,000 adults and (b) number of automated teller machines (ATMs) per 100,000 adults","SubgoalId":"8.10"},{"id":"8.10.2","title":"Proportion of adults (15 years and older) with an account at a bank or other financial institution or with a mobile-money-service provider","SubgoalId":"8.10"},{"id":"8.a.1","title":"Aid for Trade commitments and disbursements","SubgoalId":"8.a"},{"id":"8.b.1","title":"Existence of a developed and operationalized national strategy for youth employment, as a distinct strategy or as part of a national employment strategy","SubgoalId":"8.b"},{"id":"9.1.1","title":"Proportion of the rural population who live within 2 km of an all-season road","SubgoalId":"9.1"},{"id":"9.1.2","title":"Passenger and freight volumes, by mode of transport","SubgoalId":"9.1"},{"id":"9.2.1","title":"Manufacturing value added as a proportion of GDP and per capita","SubgoalId":"9.2"},{"id":"9.2.2","title":"Manufacturing employment as a proportion of total employment","SubgoalId":"9.2"},{"id":"9.3.1","title":"Proportion of small-scale industries in total industry value added","SubgoalId":"9.3"},{"id":"9.3.2","title":"Proportion of small-scale industries with a loan or line of credit","SubgoalId":"9.3"},{"id":"9.4.1","title":"CO2 emission per unit of value added","SubgoalId":"9.4"},{"id":"9.5.1","title":"Research and development expenditure as a proportion of GDP","SubgoalId":"9.5"},{"id":"9.5.2","title":"Researchers (in full-time equivalent) per million inhabitants","SubgoalId":"9.5"},{"id":"9.a.1","title":"Total official international support (official development assistance plus other official flows) to infrastructure","SubgoalId":"9.a"},{"id":"9.b.1","title":"Proportion of medium and high-tech industry value added in total value added","SubgoalId":"9.b"},{"id":"9.c.1","title":"Proportion of population covered by a mobile network, by technology","SubgoalId":"9.c"},{"id":"10.1.1","title":"Growth rates of household expenditure or income per capita among the bottom 40 per cent of the population and the total population","SubgoalId":"10.1"},{"id":"10.2.1","title":"Proportion of people living below 50 per cent of median income, by sex, age and persons with disabilities","SubgoalId":"10.2"},{"id":"10.3.1","title":"Proportion of population reporting having personally felt discriminated against or harassed in the previous 12 months on the basis of a ground of discrimination prohibited under international human rights law","SubgoalId":"10.3"},{"id":"10.4.1","title":"Labour share of GDP","SubgoalId":"10.4"},{"id":"10.4.2","title":"Redistributive impact of fiscal policy4","SubgoalId":"10.4"},{"id":"10.5.1","title":"Financial Soundness Indicators","SubgoalId":"10.5"},{"id":"10.6.1","title":"Proportion of members and voting rights of developing countries in international organizations","SubgoalId":"10.6"},{"id":"10.7.1","title":"Recruitment cost borne by employee as a proportion of monthly income earned in country of destination","SubgoalId":"10.7"},{"id":"10.7.2","title":"Number of countries with migration policies that facilitate orderly, safe, regular and responsible migration and mobility of people","SubgoalId":"10.7"},{"id":"10.7.3","title":"Number of people who died or disappeared in the process of migration towards an international destination","SubgoalId":"10.7"},{"id":"10.7.4","title":"Proportion of the population who are refugees, by country of origin","SubgoalId":"10.7"},{"id":"10.a.1","title":"Proportion of tariff lines applied to imports from least developed countries and developing countries with zero-tariff","SubgoalId":"10.a"},{"id":"10.b.1","title":"Total resource flows for development, by recipient and donor countries and type of flow (e.g. official development assistance, foreign direct investment and other flows)","SubgoalId":"10.b"},{"id":"10.c.1","title":"Remittance costs as a proportion of the amount remitted","SubgoalId":"10.c"},{"id":"11.1.1","title":"Proportion of urban population living in slums, informal settlements or inadequate housing","SubgoalId":"11.1"},{"id":"11.2.1","title":"Proportion of population that has convenient access to public transport, by sex, age and persons with disabilities","SubgoalId":"11.2"},{"id":"11.3.1","title":"Ratio of land consumption rate to population growth rate","SubgoalId":"11.3"},{"id":"11.3.2","title":"Proportion of cities with a direct participation structure of civil society in urban planning and management that operate regularly and democratically","SubgoalId":"11.3"},{"id":"11.4.1","title":"Total per capita expenditure on the preservation, protection and conservation of all cultural and natural heritage, by source of funding (public, private), type of heritage (cultural, natural) and level of government (national, regional, and local/municipal)","SubgoalId":"11.4"},{"id":"11.5.1","title":"Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population","SubgoalId":"11.5"},{"id":"11.5.2","title":"Direct economic loss in relation to global GDP, damage to critical infrastructure and number of disruptions to basic services, attributed to disasters","SubgoalId":"11.5"},{"id":"11.6.1","title":"Proportion of municipal solid waste collected and managed in controlled facilities out of total municipal waste generated, by cities","SubgoalId":"11.6"},{"id":"11.6.2","title":"Annual mean levels of fine particulate matter (e.g. PM2.5 and PM10) in cities (population weighted)","SubgoalId":"11.6"},{"id":"11.7.1","title":"Average share of the built-up area of cities that is open space for public use for all, by sex, age and persons with disabilities","SubgoalId":"11.7"},{"id":"11.7.2","title":"Proportion of persons victim of physical or sexual harassment, by sex, age, disability status and place of occurrence, in the previous 12 months","SubgoalId":"11.7"},{"id":"11.a.1","title":"Number of countries that have national urban policies or regional development plans that (a) respond to population dynamics; (b) ensure balanced territorial development; and (c) increase local fiscal space","SubgoalId":"11.a"},{"id":"11.b.1","title":"Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030","SubgoalId":"11.b"},{"id":"11.b.2","title":"Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies","SubgoalId":"11.b"},{"id":"12.1.1","title":"Number of countries developing, adopting or implementing policy instruments aimed at supporting the shift to sustainable consumption and production","SubgoalId":"12.1"},{"id":"12.2.1","title":"Material footprint, material footprint per capita, and material footprint per GDP","SubgoalId":"12.2"},{"id":"12.2.2","title":"Domestic material consumption, domestic material consumption per capita, and domestic material consumption per GDP","SubgoalId":"12.2"},{"id":"12.3.1","title":"(a) Food loss index and (b) food waste index","SubgoalId":"12.3"},{"id":"12.4.1","title":"Number of parties to international multilateral environmental agreements on hazardous waste, and other chemicals that meet their commitments and obligations in transmitting information as required by each relevant agreement","SubgoalId":"12.4"},{"id":"12.4.2","title":"(a) Hazardous waste generated per capita; and (b) proportion of hazardous waste treated, by type of treatment","SubgoalId":"12.4"},{"id":"12.5.1","title":"National recycling rate, tons of material recycled","SubgoalId":"12.5"},{"id":"12.6.1","title":"Number of companies publishing sustainability reports","SubgoalId":"12.6"},{"id":"12.7.1","title":"Degree of sustainable public procurement policies and action plan implementation","SubgoalId":"12.7"},{"id":"12.8.1","title":"Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment","SubgoalId":"12.8"},{"id":"12.a.1","title":"Installed renewable energy-generating capacity in developing countries (in watts per capita)","SubgoalId":"12.a"},{"id":"12.b.1","title":"Implementation of standard accounting tools to monitor the economic and environmental aspects of tourism sustainability","SubgoalId":"12.b"},{"id":"12.c.1","title":"Amount of fossil-fuel subsidies (production and consumption) per unit of GDP","SubgoalId":"12.c"},{"id":"13.1.1","title":"Number of deaths, missing persons and directly affected persons attributed to disasters per 100,000 population","SubgoalId":"13.1"},{"id":"13.1.2","title":"Number of countries that adopt and implement national disaster risk reduction strategies in line with the Sendai Framework for Disaster Risk Reduction 2015–2030","SubgoalId":"13.1"},{"id":"13.1.3","title":"Proportion of local governments that adopt and implement local disaster risk reduction strategies in line with national disaster risk reduction strategies","SubgoalId":"13.1"},{"id":"13.2.1","title":"Number of countries with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications, as reported to the secretariat of the United Nations Framework Convention on Climate Change","SubgoalId":"13.2"},{"id":"13.2.2","title":"Total greenhouse gas emissions per year","SubgoalId":"13.2"},{"id":"13.3.1","title":"Extent to which (i) global citizenship education and (ii) education for sustainable development are mainstreamed in (a) national education policies; (b) curricula; (c) teacher education; and (d) student assessment","SubgoalId":"13.3"},{"id":"13.a.1","title":"Amounts provided and mobilized in United States dollars per year in relation to the continued existing collective mobilization goal of the $100 billion commitment through to 2025","SubgoalId":"13.a"},{"id":"13.b.1","title":"Number of least developed countries and small island developing States with nationally determined contributions, long-term strategies, national adaptation plans and adaptation communications, as reported to the secretariat of the United Nations Framework Convention on Climate Change","SubgoalId":"13.b"},{"id":"14.1.1","title":"(a) Index of coastal eutrophication; and (b) plastic debris density","SubgoalId":"14.1"},{"id":"14.2.1","title":"Number of countries using ecosystem-based approaches to managing marine areas","SubgoalId":"14.2"},{"id":"14.3.1","title":"Average marine acidity (pH) measured at agreed suite of representative sampling stations","SubgoalId":"14.3"},{"id":"14.4.1","title":"Proportion of fish stocks within biologically sustainable levels","SubgoalId":"14.4"},{"id":"14.5.1","title":"Coverage of protected areas in relation to marine areas","SubgoalId":"14.5"},{"id":"14.6.1","title":"Degree of implementation of international instruments aiming to combat illegal, unreported and unregulated fishing","SubgoalId":"14.6"},{"id":"14.7.1","title":"Sustainable fisheries as a proportion of GDP in small island developing States, least developed countries and all countries","SubgoalId":"14.7"},{"id":"14.a.1","title":"Proportion of total research budget allocated to research in the field of marine technology","SubgoalId":"14.a"},{"id":"14.b.1","title":"Degree of application of a legal/regulatory/ policy/institutional framework which recognizes and protects access rights for small-scale fisheries","SubgoalId":"14.b"},{"id":"14.c.1","title":"Number of countries making progress in ratifying, accepting and implementing through legal, policy and institutional frameworks, ocean-related instruments that implement international law, as reflected in the United Nations Convention on the Law of the Sea, for the conservation and sustainable use of the oceans and their resources","SubgoalId":"14.c"},{"id":"15.1.1","title":"Forest area as a proportion of total land area","SubgoalId":"15.1"},{"id":"15.1.2","title":"Proportion of important sites for terrestrial and freshwater biodiversity that are covered by protected areas, by ecosystem type","SubgoalId":"15.1"},{"id":"15.2.1","title":"Progress towards sustainable forest management","SubgoalId":"15.2"},{"id":"15.3.1","title":"Proportion of land that is degraded over total land area","SubgoalId":"15.3"},{"id":"15.4.1","title":"Coverage by protected areas of important sites for mountain biodiversity","SubgoalId":"15.4"},{"id":"15.4.2","title":"Mountain Green Cover Index","SubgoalId":"15.4"},{"id":"15.5.1","title":"Red List Index","SubgoalId":"15.5"},{"id":"15.6.1","title":"Number of countries that have adopted legislative, administrative and policy frameworks to ensure fair and equitable sharing of benefits","SubgoalId":"15.6"},{"id":"15.7.1","title":"Proportion of traded wildlife that was poached or illicitly trafficked","SubgoalId":"15.7"},{"id":"15.8.1","title":"Proportion of countries adopting relevant national legislation and adequately resourcing the prevention or control of invasive alien species","SubgoalId":"15.8"},{"id":"15.9.1","title":"(a) Number of countries that have established national targets in accordance with or similar to Aichi Biodiversity Target 2 of the Strategic Plan for Biodiversity 2011–2020 in their national biodiversity strategy and action plans and the progress reported towards these targets; and (b) integration of biodiversity into national accounting and reporting systems, defined as implementation of the System of Environmental-Economic Accounting","SubgoalId":"15.9"},{"id":"15.a.1","title":"(a) Official development assistance on conservation and sustainable use of biodiversity; and (b) revenue generated and finance mobilized from biodiversity-relevant economic instruments","SubgoalId":"15.a"},{"id":"15.b.1","title":"(a) Official development assistance on conservation and sustainable use of biodiversity; and (b) revenue generated and finance mobilized from biodiversity-relevant economic instruments","SubgoalId":"15.b"},{"id":"15.c.1","title":"Proportion of traded wildlife that was poached or illicitly trafficked","SubgoalId":"15.c"},{"id":"16.1.1","title":"Number of victims of intentional homicide per 100,000 population, by sex and age","SubgoalId":"16.1"},{"id":"16.1.2","title":"Conflict-related deaths per 100,000 population, by sex, age and cause","SubgoalId":"16.1"},{"id":"16.1.3","title":"Proportion of population subjected to (a) physical violence, (b) psychological violence and (c) sexual violence in the previous 12 months","SubgoalId":"16.1"},{"id":"16.1.4","title":"Proportion of population that feel safe walking alone around the area they live","SubgoalId":"16.1"},{"id":"16.2.1","title":"Proportion of children aged 1–17 years who experienced any physical punishment and/or psychological aggression by caregivers in the past month","SubgoalId":"16.2"},{"id":"16.2.2","title":"Number of victims of human trafficking per 100,000 population, by sex, age and form of exploitation","SubgoalId":"16.2"},{"id":"16.2.3","title":"Proportion of young women and men aged 18–29 years who experienced sexual violence by age 18","SubgoalId":"16.2"},{"id":"16.3.1","title":"Proportion of victims of violence in the previous 12 months who reported their victimization to competent authorities or other officially recognized conflict resolution mechanisms","SubgoalId":"16.3"},{"id":"16.3.2","title":"Unsentenced detainees as a proportion of overall prison population","SubgoalId":"16.3"},{"id":"16.3.3","title":"Proportion of the population who have experienced a dispute in the past two years and who accessed a formal or informal dispute resolution mechanism, by type of mechanism","SubgoalId":"16.3"},{"id":"16.4.1","title":"Total value of inward and outward illicit financial flows (in current United States dollars)","SubgoalId":"16.4"},{"id":"16.4.2","title":"Proportion of seized, found or surrendered arms whose illicit origin or context has been traced or established by a competent authority in line with international instruments","SubgoalId":"16.4"},{"id":"16.5.1","title":"Proportion of persons who had at least one contact with a public official and who paid a bribe to a public official, or were asked for a bribe by those public officials, during the previous 12 months","SubgoalId":"16.5"},{"id":"16.5.2","title":"Proportion of businesses that had at least one contact with a public official and that paid a bribe to a public official, or were asked for a bribe by those public officials during the previous 12 months","SubgoalId":"16.5"},{"id":"16.6.1","title":"Primary government expenditures as a proportion of original approved budget, by sector (or by budget codes or similar)","SubgoalId":"16.6"},{"id":"16.6.2","title":"Proportion of population satisfied with their last experience of public services","SubgoalId":"16.6"},{"id":"16.7.1","title":"Proportions of positions in national and local institutions, including (a) the legislatures; (b) the public service; and (c) the judiciary, compared to national distributions, by sex, age, persons with disabilities and population groups","SubgoalId":"16.7"},{"id":"16.7.2","title":"Proportion of population who believe decision-making is inclusive and responsive, by sex, age, disability and population group","SubgoalId":"16.7"},{"id":"16.8.1","title":"Proportion of members and voting rights of developing countries in international organizations","SubgoalId":"16.8"},{"id":"16.9.1","title":"Proportion of children under 5 years of age whose births have been registered with a civil authority, by age","SubgoalId":"16.9"},{"id":"16.10.1","title":"Number of verified cases of killing, kidnapping, enforced disappearance, arbitrary detention and torture of journalists, associated media personnel, trade unionists and human rights advocates in the previous 12 months","SubgoalId":"16.10"},{"id":"16.10.2","title":"Number of countries that adopt and implement constitutional, statutory and/or policy guarantees for public access to information","SubgoalId":"16.10"},{"id":"16.a.1","title":"Existence of independent national human rights institutions in compliance with the Paris Principles","SubgoalId":"16.a"},{"id":"16.b.1","title":"Proportion of population reporting having personally felt discriminated against or harassed in the previous 12 months on the basis of a ground of discrimination prohibited under international human rights law","SubgoalId":"16.b"},{"id":"17.1.1","title":"Total government revenue as a proportion of GDP, by source","SubgoalId":"17.1"},{"id":"17.1.2","title":"Proportion of domestic budget funded by domestic taxes","SubgoalId":"17.1"},{"id":"17.2.1","title":"Net official development assistance, total and to least developed countries, as a proportion of the Organization for Economic Cooperation and Development (OECD) Development Assistance Committee donors’ gross national income (GNI)","SubgoalId":"17.2"},{"id":"17.3.1","title":"Foreign direct investment, official development assistance and South-South cooperation as a proportion of gross national income","SubgoalId":"17.3"},{"id":"17.3.2","title":"Volume of remittances (in United States dollars) as a proportion of total GDP","SubgoalId":"17.3"},{"id":"17.4.1","title":"Debt service as a proportion of exports of goods and services","SubgoalId":"17.4"},{"id":"17.5.1","title":"Number of countries that adopt and implement investment promotion regimes for developing countries, including the least developed countries","SubgoalId":"17.5"},{"id":"17.6.1","title":"Fixed Internet broadband subscriptions per 100 inhabitants, by speed5","SubgoalId":"17.6"},{"id":"17.7.1","title":"Total amount of funding for developing countries to promote the development, transfer, dissemination and diffusion of environmentally sound technologies","SubgoalId":"17.7"},{"id":"17.8.1","title":"Proportion of individuals using the Internet","SubgoalId":"17.8"},{"id":"17.9.1","title":"Dollar value of financial and technical assistance (including through North-South, South‑South and triangular cooperation) committed to developing countries","SubgoalId":"17.9"},{"id":"17.10.1","title":"Worldwide weighted tariff-average","SubgoalId":"17.10"},{"id":"17.11.1","title":"Developing countries’ and least developed countries’ share of global exports","SubgoalId":"17.11"},{"id":"17.12.1","title":"Weighted average tariffs faced by developing countries, least developed countries and small island developing States","SubgoalId":"17.12"},{"id":"17.13.1","title":"Macroeconomic Dashboard","SubgoalId":"17.13"},{"id":"17.14.1","title":"Number of countries with mechanisms in place to enhance policy coherence of sustainable development","SubgoalId":"17.14"},{"id":"17.15.1","title":"Extent of use of country-owned results frameworks and planning tools by providers of development cooperation","SubgoalId":"17.15"},{"id":"17.16.1","title":"Number of countries reporting progress in multi-stakeholder development effectiveness monitoring frameworks that support the achievement of the sustainable development goals","SubgoalId":"17.16"},{"id":"17.17.1","title":"Amount in United States dollars committed to public-private partnerships for infrastructure","SubgoalId":"17.17"},{"id":"17.18.1","title":"Statistical capacity indicator for Sustainable Development Goal monitoring","SubgoalId":"17.18"},{"id":"17.18.2","title":"Number of countries that have national statistical legislation that complies with the Fundamental Principles of Official Statistics","SubgoalId":"17.18"},{"id":"17.18.3","title":"Number of countries with a national statistical plan that is fully funded and under implementation, by source of funding","SubgoalId":"17.18"},{"id":"17.19.1","title":"Dollar value of all resources made available to strengthen statistical capacity in developing countries","SubgoalId":"17.19"},{"id":"17.19.2","title":"Proportion of countries that (a) have conducted at least one population and housing census in the last 10 years; and (b) have achieved 100 per cent birth registration and 80 per cent death registration","SubgoalId":"17.19"}])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Metrics', null, {})
  }
}
