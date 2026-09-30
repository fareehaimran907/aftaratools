const fs = require('fs');

const missingKeys = `Tools.html-encode-decode.ui.mode
Common.copy
Tools.discount-calculator.ui.discountDetails
Tools.discount-calculator.ui.priceBreakdown
Tools.base64encode-decode.ui.mode
Tools.water-intake-calculator.ui.or
Tools.days-between-dates.ui.selectDatesToCalculate
Tools.uuid-generator.ui.clickGenerateToCreateUUI
Tools.tip-calculator.ui.billDetails
Tools.tip-calculator.ui.totalBreakdown
Tools.url-encode-decode.ui.mode
Tools.profit-margin-calculator.ui.financialDetails
Tools.profit-margin-calculator.ui.profitability
Tools.json-formatter.ui.inputJSON
Tools.json-formatter.ui.reset
Tools.days-until-calculator.ui.selectAFutureDate
Tools.jwt-decoder.ui.eyJhbGciOiJIUzI1NiIsInR5cCI6Ik
Tools.markup-calculator.ui.pricingDetails
Tools.number-base-converter.ui.base
Tools.months-between-dates.ui.selectDatesToCalculate
Tools.binary-to-decimal.ui.eG1010
Tools.tax-calculator.ui.taxDetails
Tools.tax-calculator.ui.priceBreakdown
Tools.weeks-between-dates.ui.selectDatesToCalculate
Tools.percentage-calculator.ui.calculatePercentage
Tools.date-difference-calculator.ui.selectDatesToCalculate
Tools.break-even-calculator.ui.costsPricing
Tools.decimal-to-binary.ui.eG10
Tools.break-even-calculator.ui.breakEvenPoint
Tools.time-duration-calculator.ui.selectStartAndEndTimes
Tools.hex-to-decimal.ui.eG1AOrFFFFFF
Tools.roi-calculator.ui.investmentDetails
Tools.roi-calculator.ui.returnOnInvestment
Tools.time-difference-calculator.ui.selectTimesToCompare
Tools.simple-interest-calculator.ui.interestDetails
Tools.simple-interest-calculator.ui.growthBreakdown
Tools.unix-timestamp-converter.ui.eG1700000000
Tools.unix-timestamp-converter.ui.result
Tools.macro-calculator.ui.kcal
Tools.salary-calculator.ui.incomeDetails
Tools.salary-calculator.ui.enterYourIncomeDetailsToS
Tools.password-generator.ui.constraints
Tools.password-generator.ui.copyPassword
Tools.qr-code-generator.ui.contentSettings
Tools.qr-code-generator.ui.enterURLOrTextToEncode
Tools.qr-code-generator.ui.generatedQRCode
Tools.random-number-generator.ui.rangeSettings
Tools.compound-interest-calculator.ui.interestDetails
Tools.compound-interest-calculator.ui.growthBreakdown
Tools.loan-calculator.ui.loanDetails
Tools.loan-calculator.ui.paymentBreakdown
Tools.average-calculator.ui.dataSet
Tools.average-calculator.ui.eG12345
Tools.average-calculator.ui.statistics
Tools.time-zone-converter.ui.selectDateAndTimeZonesTo
Tools.gpa-calculator.ui.courseList
Tools.gpa-calculator.ui.course
Tools.gpa-calculator.ui.result
Tools.stopwatch.ui.laps
Tools.stopwatch.ui.noLapsRecordedYet
Tools.pomodoro-timer.ui.start
Tools.sleep-calculator.ui.enterWakeTimeToCalculateS
Tools.word-counter.ui.startTypingOrPasteYourTex
Tools.mortgage-calculator.ui.propertyDetails
Tools.grade-calculator.ui.assignments
Tools.mortgage-calculator.ui.mortgageSummary
Tools.grade-calculator.ui.eGMidterm
Tools.wake-up-time-calculator.ui.readyForBed
Tools.wake-up-time-calculator.ui.clickTheButtonWhenYouReG
Tools.grade-calculator.ui.result
Tools.emi-calculator.ui.eMIDetails
Tools.emi-calculator.ui.paymentSummary
Tools.bedtime-calculator.ui.enterYourWakeUpTimeToCal
Tools.bmi-calculator.ui.Lt185
Tools.work-hours-calculator.ui.enterScheduleToCalculateHo
Tools.hourly-to-salary-calculator.ui.hourlyDetails
Tools.hourly-to-salary-calculator.ui.salaryBreakdown
Tools.salary-to-hourly-calculator.ui.salaryDetails
Tools.salary-to-hourly-calculator.ui.equivalentWage
Tools.percentage-increase-calculator.ui.values
Tools.percentage-increase-calculator.ui.increaseBreakdown
Tools.percentage-decrease-calculator.ui.values
Tools.percentage-decrease-calculator.ui.decreaseBreakdown
Tools.character-counter.ui.startTypingOrPasteYourTex
Tools.overtime-calculator.ui.paySummary
Tools.lorem-ipsum-generator.ui.generatedText
Tools.investment-calculator.ui.investmentPlan
Tools.investment-calculator.ui.growthProjection`.split('\n').map(s => s.trim()).filter(Boolean);

function formatValue(keySegment) {
  if (keySegment === 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik') return 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ik...';
  if (keySegment === 'eG1010') return 'e.g. 1010';
  if (keySegment === 'eG10') return 'e.g. 10';
  if (keySegment === 'eG1AOrFFFFFF') return 'e.g. 1A or FFFFFF';
  if (keySegment === 'eG1700000000') return 'e.g. 1700000000';
  if (keySegment === 'eG12345') return 'e.g. 1, 2, 3, 4, 5';
  if (keySegment === 'eGMidterm') return 'e.g. Midterm';
  if (keySegment === 'Lt185') return '< 18.5';
  if (keySegment === 'kcal') return 'kcal';
  
  // Format camelCase to Title Case
  let words = keySegment.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  
  // Handle some specific cut-off sentences based on the keys
  if (keySegment === 'enterYourIncomeDetailsToS') return 'Enter your income details to see summary';
  if (keySegment === 'selectDateAndTimeZonesTo') return 'Select date and time zones to compare';
  if (keySegment === 'enterWakeTimeToCalculateS') return 'Enter wake time to calculate sleep times';
  if (keySegment === 'startTypingOrPasteYourTex') return 'Start typing or paste your text here...';
  if (keySegment === 'clickTheButtonWhenYouReG') return 'Click the button when you are going to bed';
  if (keySegment === 'enterYourWakeUpTimeToCal') return 'Enter your wake up time to calculate bedtimes';
  if (keySegment === 'enterScheduleToCalculateHo') return 'Enter schedule to calculate hours';
  if (keySegment === 'clickGenerateToCreateUUI') return 'Click generate to create UUID';
  if (keySegment === 'enterURLOrTextToEncode') return 'Enter URL or text to encode';
  
  return words;
}

const enPath = 'messages/en.json';
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

for (const keyPath of missingKeys) {
  const parts = keyPath.split('.');
  let current = enData;
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (i === parts.length - 1) {
      if (!current[part]) {
        current[part] = formatValue(part);
      }
    } else {
      if (!current[part]) {
        current[part] = {};
      }
      current = current[part];
    }
  }
}

fs.writeFileSync(enPath, JSON.stringify(enData, null, 2));
console.log('Added missing keys to en.json');
