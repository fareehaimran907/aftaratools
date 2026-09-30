import { Locale } from "@/i18n/routing";

export type ReviewStatus = "draft" | "reviewed";

export interface ToolLocaleContent {
  reviewStatus: ReviewStatus;
  primaryKeyword: string;
  title: string;
  description: string;
  intro: string;
  howToUse?: string[];
  explanation?: string;
  formula?: string;
  example?: string;
  faq?: { question: string; answer: string }[];
}

export interface ToolEntry {
  id: string;
  categoryId: string;
  icon: string;
  ymyl: boolean;
  relatedToolIds: string[];
  locales: Partial<Record<Locale, ToolLocaleContent>>;
}

export const toolsRegistry: Record<string, ToolEntry> = {
  "age-calculator": {
    id: "age-calculator",
    categoryId: "date-time",
    icon: "Calendar",
    ymyl: false,
    relatedToolIds: ["date-difference-calculator", "days-between-dates"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "age calculator",
        title: "Age Calculator",
        description: "Calculate your exact age in years, months and days.",
        intro: "Calculate your exact age in years, months and days instantly with our free online age calculator.",
        howToUse: [
          "Enter your date of birth.",
          "Click Calculate.",
          "View your exact age, next birthday, and total days lived."
        ],
        explanation: "Age is calculated by subtracting your date of birth from today's date. The calculation accounts for leap years and the varying lengths of months.",
        formula: "Age = Current Date - Date of Birth",
        faq: [
          { question: "How old am I?", answer: "Use the calculator above by entering your birth date to find out exactly how old you are." },
          { question: "How is age calculated?", answer: "Age is calculated by determining the difference between the current date and your date of birth, broken down into years, months, and days." }
        ]
      },
      es: { reviewStatus: "draft", primaryKeyword: "calculadora de edad", title: "", description: "", intro: "" },
      ru: { reviewStatus: "draft", primaryKeyword: "калькулятор возраста", title: "", description: "", intro: "" },
      ar: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "حاسبة العمر", 
        title: "حاسبة العمر", 
        description: "احسب عمرك الدقيق بالسنوات والأشهر والأيام.", 
        intro: "احسب عمرك الدقيق بالسنوات والأشهر والأيام على الفور باستخدام حاسبة العمر المجانية عبر الإنترنت."
      },
    }
  },
  "percentage-calculator": {
    id: "percentage-calculator",
    categoryId: "finance",
    icon: "Percent",
    ymyl: false,
    relatedToolIds: ["percentage-increase-calculator", "discount-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "percentage calculator", title: "Percentage Calculator", description: "Calculate percentages quickly and accurately.", intro: "Calculate percentages quickly and accurately with our free online tool." },
      es: { reviewStatus: "draft", primaryKeyword: "calculadora de porcentajes", title: "", description: "", intro: "" },
      ru: { reviewStatus: "draft", primaryKeyword: "калькулятор процентов", title: "", description: "", intro: "" },
      ar: { reviewStatus: "draft", primaryKeyword: "حاسبة النسبة المئوية", title: "", description: "", intro: "" },
    }
  },
  "json-formatter": {
    id: "json-formatter",
    categoryId: "developer-tools",
    icon: "Code",
    ymyl: false,
    relatedToolIds: ["base64-encode-decode", "url-encode-decode"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "json formatter", title: "JSON Formatter", description: "Format, validate, and beautify JSON data.", intro: "Format, validate, and beautify JSON data instantly." },
      es: { reviewStatus: "draft", primaryKeyword: "formateador json", title: "", description: "", intro: "" },
      ru: { reviewStatus: "draft", primaryKeyword: "форматировщик json", title: "", description: "", intro: "" },
      ar: { reviewStatus: "draft", primaryKeyword: "منسق json", title: "", description: "", intro: "" },
    }
  },
  "date-difference-calculator": {
    id: "date-difference-calculator",
    categoryId: "date-time",
    icon: "CalendarRange",
    ymyl: false,
    relatedToolIds: ["age-calculator", "days-between-dates", "days-until-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "date difference calculator", 
        title: "Date Difference Calculator", 
        description: "Calculate the exact time difference between two dates.", 
        intro: "Find the exact difference between any two dates in years, months, weeks, days, and hours.",
        howToUse: [
          "Select the start date.",
          "Select the end date.",
          "The calculator will instantly display the exact difference."
        ],
        explanation: "The date difference is calculated by counting the full years, then full months, and finally the remaining days between the start date and the end date. It accounts for leap years and varying days in a month.",
        faq: [
          { question: "Does this include the start and end dates?", answer: "This calculation measures the time elapsed between the two dates (exclusive). For example, the difference between Jan 1 and Jan 2 is exactly 1 day." },
          { question: "Are leap years considered?", answer: "Yes, leap years are automatically factored into the day and month calculations." }
        ]
      },
      es: { reviewStatus: "draft", primaryKeyword: "calculadora de diferencia de fechas", title: "", description: "", intro: "" },
      ru: { reviewStatus: "draft", primaryKeyword: "калькулятор разницы дат", title: "", description: "", intro: "" },
      ar: { reviewStatus: "draft", primaryKeyword: "حاسبة الفرق بين تاريخين", title: "", description: "", intro: "" },
    }
  },
  "days-between-dates": {
    id: "days-between-dates",
    categoryId: "date-time",
    icon: "CalendarDays",
    ymyl: false,
    relatedToolIds: ["date-difference-calculator", "days-until-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "days between dates", 
        title: "Days Between Dates", 
        description: "Calculate the exact number of days between two dates.", 
        intro: "Instantly calculate the exact number of days between any two dates.",
        howToUse: [
          "Select the start date.",
          "Select the end date.",
          "Choose whether to include the start and/end date in the calculation.",
          "Click Calculate."
        ],
        explanation: "This tool calculates the absolute mathematical difference in days between two calendar dates, accounting for varying month lengths and leap years.",
        faq: [
          { question: "Are both days included in the count?", answer: "By default, the count is exclusive of the end date (measuring elapsed time). You can toggle the settings to include the start or end dates in the final count." }
        ]
      },
      es: { reviewStatus: "draft", primaryKeyword: "días entre fechas", title: "", description: "", intro: "" },
    }
  },
  "days-until-calculator": {
    id: "days-until-calculator",
    categoryId: "date-time",
    icon: "Hourglass",
    ymyl: false,
    relatedToolIds: ["days-between-dates", "date-difference-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "days until calculator", 
        title: "Days Until Calculator", 
        description: "Calculate how many days remain until a selected date.", 
        intro: "Find out exactly how many days are left until your upcoming event, vacation, or deadline.",
        howToUse: [
          "Select your target future date.",
          "Click Calculate.",
          "See the remaining days, weeks, and months."
        ],
        explanation: "The calculator measures the time from today (your local time) until the target date.",
      },
      es: { reviewStatus: "draft", primaryKeyword: "calculadora de días faltantes", title: "", description: "", intro: "" },
    }
  },
  "weeks-between-dates": {
    id: "weeks-between-dates",
    categoryId: "date-time",
    icon: "CalendarRange",
    ymyl: false,
    relatedToolIds: ["days-between-dates", "months-between-dates"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "weeks between dates", 
        title: "Weeks Between Dates", 
        description: "Calculate the number of weeks and remaining days between two dates.", 
        intro: "Calculate the exact number of weeks and remaining days between any two dates.",
      },
      es: { reviewStatus: "draft", primaryKeyword: "semanas entre fechas", title: "", description: "", intro: "" },
    }
  },
  "months-between-dates": {
    id: "months-between-dates",
    categoryId: "date-time",
    icon: "CalendarRange",
    ymyl: false,
    relatedToolIds: ["weeks-between-dates", "date-difference-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "months between dates", 
        title: "Months Between Dates", 
        description: "Calculate the number of complete months and remaining days between two dates.", 
        intro: "Calculate the exact number of complete months and remaining days between any two dates.",
      },
      es: { reviewStatus: "draft", primaryKeyword: "meses entre fechas", title: "", description: "", intro: "" },
    }
  },
  "time-duration-calculator": {
    id: "time-duration-calculator",
    categoryId: "date-time",
    icon: "Clock",
    ymyl: false,
    relatedToolIds: ["time-difference-calculator", "countdown-timer"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "time duration calculator", 
        title: "Time Duration Calculator", 
        description: "Calculate the exact duration between two times.", 
        intro: "Find the exact hours and minutes between a start time and an end time.",
      },
      es: { reviewStatus: "draft", primaryKeyword: "calculadora de duración", title: "", description: "", intro: "" },
    }
  },
  "time-difference-calculator": {
    id: "time-difference-calculator",
    categoryId: "date-time",
    icon: "Clock",
    ymyl: false,
    relatedToolIds: ["time-duration-calculator", "world-time-converter"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "time difference calculator", 
        title: "Time Difference Calculator", 
        description: "Calculate the time difference between two clocks.", 
        intro: "Find the exact difference between two times.",
      },
      es: { reviewStatus: "draft", primaryKeyword: "calculadora de diferencia de tiempo", title: "", description: "", intro: "" },
    }
  },
  "unix-timestamp-converter": {
    id: "unix-timestamp-converter",
    categoryId: "date-time",
    icon: "Binary",
    ymyl: false,
    relatedToolIds: ["world-time-converter", "time-zone-converter"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "unix timestamp converter", 
        title: "Unix Timestamp Converter", 
        description: "Convert Unix timestamps to readable dates and vice versa.", 
        intro: "Instantly convert seconds or milliseconds since the Unix Epoch to a human-readable format.",
      },
      es: { reviewStatus: "draft", primaryKeyword: "convertidor timestamp unix", title: "", description: "", intro: "" },
    }
  },
  "world-time-converter": {
    id: "world-time-converter",
    categoryId: "date-time",
    icon: "Globe",
    ymyl: false,
    relatedToolIds: ["time-zone-converter", "time-difference-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "world time converter", title: "World Time Converter", description: "Convert time across different cities worldwide.", intro: "Check the current time in major cities across the globe." } }
  },
  "time-zone-converter": {
    id: "time-zone-converter",
    categoryId: "date-time",
    icon: "Map",
    ymyl: false,
    relatedToolIds: ["world-time-converter", "time-difference-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "time zone converter", title: "Time Zone Converter", description: "Convert times between specific time zones.", intro: "Easily translate a specific time from one time zone to another." } }
  },
  "countdown-timer": {
    id: "countdown-timer",
    categoryId: "date-time",
    icon: "Hourglass",
    ymyl: false,
    relatedToolIds: ["stopwatch", "pomodoro-timer"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "countdown timer", title: "Countdown Timer", description: "Set a timer to count down from a specific time.", intro: "Use this simple online countdown timer for your tasks." } }
  },
  "stopwatch": {
    id: "stopwatch",
    categoryId: "date-time",
    icon: "Timer",
    ymyl: false,
    relatedToolIds: ["countdown-timer", "pomodoro-timer"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "online stopwatch", title: "Stopwatch", description: "A simple and accurate online stopwatch.", intro: "Track time exactly down to the millisecond with lap support." } }
  },
  "pomodoro-timer": {
    id: "pomodoro-timer",
    categoryId: "date-time",
    icon: "ClockAlert",
    ymyl: false,
    relatedToolIds: ["stopwatch", "countdown-timer"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "pomodoro timer", title: "Pomodoro Timer", description: "Boost productivity with the Pomodoro technique.", intro: "Work in focused 25-minute intervals with scheduled breaks." } }
  },
  "sleep-calculator": {
    id: "sleep-calculator",
    categoryId: "date-time",
    icon: "Moon",
    ymyl: true,
    relatedToolIds: ["wake-up-time-calculator", "bedtime-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "sleep calculator", title: "Sleep Calculator", description: "Calculate optimal sleep cycles.", intro: "Find the best time to wake up or go to sleep based on 90-minute sleep cycles." } }
  },
  "wake-up-time-calculator": {
    id: "wake-up-time-calculator",
    categoryId: "date-time",
    icon: "Sunrise",
    ymyl: true,
    relatedToolIds: ["sleep-calculator", "bedtime-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "wake up time calculator", title: "Wake-Up Time Calculator", description: "Know exactly when to wake up.", intro: "Calculate when you should wake up to feel refreshed if you go to bed right now." } }
  },
  "bedtime-calculator": {
    id: "bedtime-calculator",
    categoryId: "date-time",
    icon: "Sunset",
    ymyl: true,
    relatedToolIds: ["sleep-calculator", "wake-up-time-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "bedtime calculator", title: "Bedtime Calculator", description: "Know exactly when to go to bed.", intro: "Calculate when you should go to sleep if you need to wake up at a specific time." } }
  },
  "work-hours-calculator": {
    id: "work-hours-calculator",
    categoryId: "date-time",
    icon: "Briefcase",
    ymyl: false,
    relatedToolIds: ["overtime-calculator", "time-duration-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "work hours calculator", title: "Work Hours Calculator", description: "Calculate total work hours for the week.", intro: "Easily add up your timesheet hours including breaks." } }
  },
  "overtime-calculator": {
    id: "overtime-calculator",
    categoryId: "date-time",
    icon: "BriefcaseBusiness",
    ymyl: true,
    relatedToolIds: ["work-hours-calculator", "salary-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "overtime calculator", title: "Overtime Calculator", description: "Calculate overtime pay based on hours worked.", intro: "Determine your expected overtime pay based on your regular wage and multiplier." } }
  },
  "salary-calculator": {
    id: "salary-calculator",
    categoryId: "finance",
    icon: "CircleDollarSign",
    ymyl: true,
    relatedToolIds: ["hourly-to-salary-calculator", "tax-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "salary calculator", 
        title: "Salary Calculator", 
        description: "Calculate your net take-home pay.", 
        intro: "Instantly convert your hourly, daily, weekly, or annual salary into equivalent rates.",
      }
    }
  },
  "discount-calculator": {
    id: "discount-calculator",
    categoryId: "finance",
    icon: "Tags",
    ymyl: false,
    relatedToolIds: ["percentage-calculator", "tip-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "discount calculator", 
        title: "Discount Calculator", 
        description: "Calculate the final price after a percentage or fixed discount.", 
        intro: "Find out exactly how much you'll save during a sale.",
      }
    }
  },
  "tip-calculator": {
    id: "tip-calculator",
    categoryId: "finance",
    icon: "Receipt",
    ymyl: false,
    relatedToolIds: ["discount-calculator", "percentage-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "tip calculator", 
        title: "Tip Calculator", 
        description: "Calculate tips and split the bill among friends.", 
        intro: "Easily calculate the appropriate tip and exactly how much each person owes.",
      }
    }
  },
  "tax-calculator": {
    id: "tax-calculator",
    categoryId: "finance",
    icon: "ReceiptText",
    ymyl: true,
    relatedToolIds: ["salary-calculator", "discount-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "sales tax calculator", 
        title: "Sales Tax Calculator", 
        description: "Calculate total cost including sales tax.", 
        intro: "Determine the final price of an item including local sales tax.",
      }
    }
  },
  "profit-margin-calculator": {
    id: "profit-margin-calculator",
    categoryId: "finance",
    icon: "TrendingUp",
    ymyl: true,
    relatedToolIds: ["markup-calculator", "roi-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "profit margin calculator", 
        title: "Profit Margin Calculator", 
        description: "Calculate gross profit and profit margin.", 
        intro: "Calculate your gross profit and profit margin percentage based on cost and revenue.",
      }
    }
  },
  "markup-calculator": {
    id: "markup-calculator",
    categoryId: "finance",
    icon: "ArrowUpRight",
    ymyl: true,
    relatedToolIds: ["profit-margin-calculator", "break-even-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "markup calculator", 
        title: "Markup Calculator", 
        description: "Calculate retail price based on cost and markup percentage.", 
        intro: "Determine your selling price based on your cost and desired markup percentage.",
      }
    }
  },
  "break-even-calculator": {
    id: "break-even-calculator",
    categoryId: "finance",
    icon: "Scale",
    ymyl: true,
    relatedToolIds: ["profit-margin-calculator", "roi-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "break even calculator", 
        title: "Break-Even Calculator", 
        description: "Calculate your business break-even point.", 
        intro: "Determine how many units you need to sell to cover your fixed and variable costs.",
      }
    }
  },
  "roi-calculator": {
    id: "roi-calculator",
    categoryId: "finance",
    icon: "LineChart",
    ymyl: true,
    relatedToolIds: ["profit-margin-calculator", "simple-interest-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "roi calculator", 
        title: "ROI Calculator", 
        description: "Calculate Return on Investment.", 
        intro: "Calculate the return on investment (ROI) for any investment.",
      }
    }
  },
  "simple-interest-calculator": {
    id: "simple-interest-calculator",
    categoryId: "finance",
    icon: "Percent",
    ymyl: true,
    relatedToolIds: ["roi-calculator", "compound-interest-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "simple interest calculator", 
        title: "Simple Interest Calculator", 
        description: "Calculate simple interest and final balance.", 
        intro: "Calculate the simple interest earned or paid on a principal amount over time.",
      }
    }
  },
  "compound-interest-calculator": {
    id: "compound-interest-calculator",
    categoryId: "finance",
    icon: "TrendingUp",
    ymyl: true,
    relatedToolIds: ["simple-interest-calculator", "investment-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "compound interest calculator", 
        title: "Compound Interest Calculator", 
        description: "Calculate compound interest over time.", 
        intro: "Calculate exactly how your money will grow over time with compound interest.",
      }
    }
  },
  "loan-calculator": {
    id: "loan-calculator",
    categoryId: "finance",
    icon: "BadgeDollarSign",
    ymyl: true,
    relatedToolIds: ["mortgage-calculator", "emi-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "loan calculator", 
        title: "Loan Calculator", 
        description: "Calculate monthly payments and interest for any loan.", 
        intro: "Determine your monthly payment, total interest, and total cost of a loan.",
      }
    }
  },
  "mortgage-calculator": {
    id: "mortgage-calculator",
    categoryId: "finance",
    icon: "Home",
    ymyl: true,
    relatedToolIds: ["loan-calculator", "emi-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "mortgage calculator", 
        title: "Mortgage Calculator", 
        description: "Calculate monthly mortgage payments.", 
        intro: "Calculate your monthly mortgage payments including principal and interest.",
      }
    }
  },
  "emi-calculator": {
    id: "emi-calculator",
    categoryId: "finance",
    icon: "Calculator",
    ymyl: true,
    relatedToolIds: ["loan-calculator", "mortgage-calculator"],
    locales: {
      en: { 
        reviewStatus: "reviewed", 
        primaryKeyword: "emi calculator", 
        title: "EMI Calculator", 
        description: "Calculate Equated Monthly Installment (EMI).", 
        intro: "Easily calculate the Equated Monthly Installment for home loans, car loans, or personal loans.",
      }
    }
  },
  "hourly-to-salary-calculator": {
    id: "hourly-to-salary-calculator",
    categoryId: "finance",
    icon: "BadgeDollarSign",
    ymyl: true,
    relatedToolIds: ["salary-calculator", "salary-to-hourly-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "hourly to salary calculator", title: "Hourly to Salary Calculator", description: "Convert an hourly wage to an annual salary.", intro: "Find out your equivalent annual, monthly, and weekly salary based on your hourly rate." }
    }
  },
  "salary-to-hourly-calculator": {
    id: "salary-to-hourly-calculator",
    categoryId: "finance",
    icon: "BadgeDollarSign",
    ymyl: true,
    relatedToolIds: ["salary-calculator", "hourly-to-salary-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "salary to hourly calculator", title: "Salary to Hourly Calculator", description: "Convert an annual salary to an hourly wage.", intro: "Find out exactly how much you make per hour based on your annual salary." }
    }
  },
  "percentage-increase-calculator": {
    id: "percentage-increase-calculator",
    categoryId: "finance",
    icon: "TrendingUp",
    ymyl: false,
    relatedToolIds: ["percentage-calculator", "percentage-decrease-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "percentage increase calculator", title: "Percentage Increase Calculator", description: "Calculate the percentage increase between two numbers.", intro: "Find out exactly how much a value has increased in percentage terms." }
    }
  },
  "percentage-decrease-calculator": {
    id: "percentage-decrease-calculator",
    categoryId: "finance",
    icon: "TrendingDown",
    ymyl: false,
    relatedToolIds: ["percentage-calculator", "percentage-increase-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "percentage decrease calculator", title: "Percentage Decrease Calculator", description: "Calculate the percentage decrease between two numbers.", intro: "Find out exactly how much a value has decreased in percentage terms." }
    }
  },
  "investment-calculator": {
    id: "investment-calculator",
    categoryId: "finance",
    icon: "LineChart",
    ymyl: true,
    relatedToolIds: ["compound-interest-calculator", "roi-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "investment calculator", title: "Investment Calculator", description: "Calculate potential investment returns.", intro: "Estimate how much your investments can grow over time." }
    }
  },
  "currency-converter": {
    id: "currency-converter",
    categoryId: "finance",
    icon: "Globe",
    ymyl: true,
    relatedToolIds: ["salary-calculator", "percentage-calculator"],
    locales: {
      en: { reviewStatus: "reviewed", primaryKeyword: "currency converter", title: "Currency Converter", description: "Convert between global currencies.", intro: "Quickly estimate currency conversions using standard exchange rate templates." }
    }
  },
  "length-converter": {
    id: "length-converter",
    categoryId: "converters",
    icon: "Ruler",
    ymyl: false,
    relatedToolIds: ["area-converter", "height-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "length converter", title: "Length Converter", description: "Convert between meters, feet, inches, and more.", intro: "Easily convert lengths and distances between metric and imperial units." } }
  },
  "weight-converter": {
    id: "weight-converter",
    categoryId: "converters",
    icon: "Scale3d",
    ymyl: false,
    relatedToolIds: ["volume-converter", "length-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "weight converter", title: "Weight Converter", description: "Convert between kilograms, pounds, ounces, etc.", intro: "Instantly convert mass and weight between different units of measurement." } }
  },
  "height-converter": {
    id: "height-converter",
    categoryId: "converters",
    icon: "ArrowUpDown",
    ymyl: false,
    relatedToolIds: ["length-converter", "bmi-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "height converter", title: "Height Converter", description: "Convert height from feet and inches to cm.", intro: "Easily convert human height between metric and imperial systems." } }
  },
  "temperature-converter": {
    id: "temperature-converter",
    categoryId: "converters",
    icon: "Thermometer",
    ymyl: false,
    relatedToolIds: ["length-converter", "weight-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "temperature converter", title: "Temperature Converter", description: "Convert Celsius, Fahrenheit, and Kelvin.", intro: "Quickly translate temperatures between major scales." } }
  },
  "area-converter": {
    id: "area-converter",
    categoryId: "converters",
    icon: "Square",
    ymyl: false,
    relatedToolIds: ["length-converter", "volume-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "area converter", title: "Area Converter", description: "Convert square meters, acres, hectares, etc.", intro: "Translate areas and land sizes between metric and imperial units." } }
  },
  "volume-converter": {
    id: "volume-converter",
    categoryId: "converters",
    icon: "Box",
    ymyl: false,
    relatedToolIds: ["area-converter", "weight-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "volume converter", title: "Volume Converter", description: "Convert liters, gallons, cups, and more.", intro: "Easily convert liquid and solid volumes between systems." } }
  },
  "speed-converter": {
    id: "speed-converter",
    categoryId: "converters",
    icon: "Gauge",
    ymyl: false,
    relatedToolIds: ["length-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "speed converter", title: "Speed Converter", description: "Convert km/h, mph, knots, and m/s.", intro: "Instantly translate speeds between different measurement systems." } }
  },
  "data-storage-converter": {
    id: "data-storage-converter",
    categoryId: "converters",
    icon: "HardDrive",
    ymyl: false,
    relatedToolIds: [],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "data storage converter", title: "Data Storage Converter", description: "Convert bytes, KB, MB, GB, TB.", intro: "Translate digital storage sizes across bytes, kilobytes, megabytes, and beyond." } }
  },
  "number-base-converter": {
    id: "number-base-converter",
    categoryId: "converters",
    icon: "Binary",
    ymyl: false,
    relatedToolIds: ["binary-to-decimal", "decimal-to-binary"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "number base converter", title: "Number Base Converter", description: "Convert between binary, octal, decimal, hex.", intro: "Translate numbers between standard mathematical bases." } }
  },
  "binary-to-decimal": {
    id: "binary-to-decimal",
    categoryId: "converters",
    icon: "Binary",
    ymyl: false,
    relatedToolIds: ["decimal-to-binary", "number-base-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "binary to decimal", title: "Binary to Decimal Converter", description: "Convert base-2 binary to base-10 decimal.", intro: "Quickly translate binary code into readable decimal numbers." } }
  },
  "decimal-to-binary": {
    id: "decimal-to-binary",
    categoryId: "converters",
    icon: "Binary",
    ymyl: false,
    relatedToolIds: ["binary-to-decimal", "number-base-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "decimal to binary", title: "Decimal to Binary Converter", description: "Convert base-10 decimal to base-2 binary.", intro: "Translate standard decimal numbers into binary code." } }
  },
  "hex-to-decimal": {
    id: "hex-to-decimal",
    categoryId: "converters",
    icon: "Hash",
    ymyl: false,
    relatedToolIds: ["number-base-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "hex to decimal", title: "Hex to Decimal Converter", description: "Convert hexadecimal strings to decimal.", intro: "Instantly translate hex colors or memory addresses to standard decimals." } }
  },
  "roman-numeral-converter": {
    id: "roman-numeral-converter",
    categoryId: "converters",
    icon: "Landmark",
    ymyl: false,
    relatedToolIds: [],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "roman numeral converter", title: "Roman Numeral Converter", description: "Convert numbers to Roman numerals.", intro: "Translate standard numbers into classic Roman numerals and vice versa." } }
  },
  "fraction-calculator": {
    id: "fraction-calculator",
    categoryId: "education",
    icon: "Divide",
    ymyl: false,
    relatedToolIds: ["ratio-calculator", "percentage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "fraction calculator", title: "Fraction Calculator", description: "Add, subtract, multiply, and divide fractions.", intro: "Easily solve mathematical equations involving fractions with step-by-step simplification." } }
  },
  "ratio-calculator": {
    id: "ratio-calculator",
    categoryId: "education",
    icon: "Percent",
    ymyl: false,
    relatedToolIds: ["fraction-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "ratio calculator", title: "Ratio Calculator", description: "Calculate missing ratio values.", intro: "Solve for missing numbers in equivalent ratios or scale ratios up and down." } }
  },
  "average-calculator": {
    id: "average-calculator",
    categoryId: "education",
    icon: "Sigma",
    ymyl: false,
    relatedToolIds: ["gpa-calculator", "grade-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "average calculator", title: "Average Calculator", description: "Calculate the mean average of numbers.", intro: "Find the mathematical mean of a dataset of numbers instantly." } }
  },
  "gpa-calculator": {
    id: "gpa-calculator",
    categoryId: "education",
    icon: "GraduationCap",
    ymyl: true,
    relatedToolIds: ["grade-calculator", "final-grade-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "gpa calculator", title: "GPA Calculator", description: "Calculate your high school or college GPA.", intro: "Enter your course grades and credits to find your true Grade Point Average." } }
  },
  "grade-calculator": {
    id: "grade-calculator",
    categoryId: "education",
    icon: "BookOpenCheck",
    ymyl: false,
    relatedToolIds: ["final-grade-calculator", "gpa-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "grade calculator", title: "Grade Calculator", description: "Calculate your current class grade.", intro: "Keep track of your academic performance by entering your assignment grades." } }
  },
  "final-grade-calculator": {
    id: "final-grade-calculator",
    categoryId: "education",
    icon: "Target",
    ymyl: true,
    relatedToolIds: ["grade-calculator", "gpa-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "final grade calculator", title: "Final Grade Calculator", description: "Calculate what you need on the final exam.", intro: "Find out exactly what score you need on your final exam to pass the class." } }
  },
  "bmi-calculator": {
    id: "bmi-calculator",
    categoryId: "health",
    icon: "Activity",
    ymyl: true,
    relatedToolIds: ["bmr-calculator", "body-fat-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "bmi calculator", title: "BMI Calculator", description: "Calculate your Body Mass Index.", intro: "Estimate your body mass index based on your height and weight." } }
  },
  "bmr-calculator": {
    id: "bmr-calculator",
    categoryId: "health",
    icon: "Flame",
    ymyl: true,
    relatedToolIds: ["bmi-calculator", "calorie-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "bmr calculator", title: "BMR Calculator", description: "Calculate your Basal Metabolic Rate.", intro: "Find out exactly how many calories your body burns at rest." } }
  },
  "calorie-calculator": {
    id: "calorie-calculator",
    categoryId: "health",
    icon: "Utensils",
    ymyl: true,
    relatedToolIds: ["macro-calculator", "bmr-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "calorie calculator", title: "Calorie Calculator", description: "Calculate your daily calorie needs.", intro: "Estimate how many calories you should eat to lose, maintain, or gain weight." } }
  },
  "macro-calculator": {
    id: "macro-calculator",
    categoryId: "health",
    icon: "PieChart",
    ymyl: true,
    relatedToolIds: ["calorie-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "macro calculator", title: "Macro Calculator", description: "Calculate your optimal macronutrients.", intro: "Find the ideal ratio of protein, fats, and carbs for your fitness goals." } }
  },
  "body-fat-calculator": {
    id: "body-fat-calculator",
    categoryId: "health",
    icon: "User",
    ymyl: true,
    relatedToolIds: ["bmi-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "body fat calculator", title: "Body Fat Calculator", description: "Estimate your body fat percentage.", intro: "Calculate your estimated body fat percentage using standard body measurements." } }
  },
  "water-intake-calculator": {
    id: "water-intake-calculator",
    categoryId: "health",
    icon: "Droplet",
    ymyl: true,
    relatedToolIds: ["calorie-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "water intake calculator", title: "Water Intake Calculator", description: "Calculate daily hydration needs.", intro: "Find out exactly how much water you should be drinking every day." } }
  },
  "pace-calculator": {
    id: "pace-calculator",
    categoryId: "health",
    icon: "Timer",
    ymyl: false,
    relatedToolIds: ["running-distance-calculator", "speed-distance-time-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "pace calculator", title: "Pace Calculator", description: "Calculate running pace from distance and time.", intro: "Find your average pace for running, cycling, or swimming." } }
  },
  "running-distance-calculator": {
    id: "running-distance-calculator",
    categoryId: "health",
    icon: "MapPin",
    ymyl: false,
    relatedToolIds: ["pace-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "running distance calculator", title: "Running Distance Calculator", description: "Calculate distance based on pace and time.", intro: "Find out how far you ran based on your average pace and total time." } }
  },
  "speed-distance-time-calculator": {
    id: "speed-distance-time-calculator",
    categoryId: "health",
    icon: "Navigation",
    ymyl: false,
    relatedToolIds: ["pace-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "speed distance time calculator", title: "Speed, Distance, & Time Calculator", description: "Calculate speed, distance, or time.", intro: "Solve for any one of the three variables if you know the other two." } }
  },
  "square-footage-calculator": {
    id: "square-footage-calculator",
    categoryId: "home",
    icon: "Square",
    ymyl: false,
    relatedToolIds: ["cost-per-square-foot-calculator", "paint-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "square footage calculator", title: "Square Footage Calculator", description: "Calculate square footage of any area.", intro: "Find the total area of a room, house, or property in square feet." } }
  },
  "paint-calculator": {
    id: "paint-calculator",
    categoryId: "home",
    icon: "PaintRoller",
    ymyl: false,
    relatedToolIds: ["square-footage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "paint calculator", title: "Paint Calculator", description: "Calculate how much paint you need.", intro: "Find out exactly how many gallons of paint to buy for your next project." } }
  },
  "tile-calculator": {
    id: "tile-calculator",
    categoryId: "home",
    icon: "LayoutGrid",
    ymyl: false,
    relatedToolIds: ["square-footage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "tile calculator", title: "Tile Calculator", description: "Calculate tiles needed for a floor or wall.", intro: "Estimate how many tiles you need to cover any surface, including waste." } }
  },
  "concrete-calculator": {
    id: "concrete-calculator",
    categoryId: "home",
    icon: "Truck",
    ymyl: false,
    relatedToolIds: ["square-footage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "concrete calculator", title: "Concrete Calculator", description: "Calculate yards of concrete needed.", intro: "Find out how many cubic yards of concrete you need for your slab or footings." } }
  },
  "board-foot-calculator": {
    id: "board-foot-calculator",
    categoryId: "home",
    icon: "Trees",
    ymyl: false,
    relatedToolIds: [],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "board foot calculator", title: "Board Foot Calculator", description: "Calculate board feet of lumber.", intro: "Calculate the volume of rough lumber using the standard board foot metric." } }
  },
  "cost-per-square-foot-calculator": {
    id: "cost-per-square-foot-calculator",
    categoryId: "home",
    icon: "CircleDollarSign",
    ymyl: true,
    relatedToolIds: ["square-footage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "cost per square foot calculator", title: "Cost Per Square Foot Calculator", description: "Calculate price per square foot.", intro: "Compare real estate or flooring prices by breaking them down to a per-square-foot cost." } }
  },
  "mulch-calculator": {
    id: "mulch-calculator",
    categoryId: "home",
    icon: "Leaf",
    ymyl: false,
    relatedToolIds: ["plant-spacing-calculator", "square-footage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "mulch calculator", title: "Mulch Calculator", description: "Calculate cubic yards of mulch.", intro: "Figure out exactly how much mulch or topsoil you need for your landscaping." } }
  },
  "plant-spacing-calculator": {
    id: "plant-spacing-calculator",
    categoryId: "home",
    icon: "Sprout",
    ymyl: false,
    relatedToolIds: ["mulch-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "plant spacing calculator", title: "Plant Spacing Calculator", description: "Calculate how many plants you need.", intro: "Determine exactly how many plants will fit in your garden based on required spacing." } }
  },
  "step-calculator": {
    id: "step-calculator",
    categoryId: "home",
    icon: "ListOrdered",
    ymyl: false,
    relatedToolIds: ["decking-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "stair calculator", title: "Stair Calculator", description: "Calculate stair rise and run.", intro: "Determine the exact number of steps, rise, and run for your staircase project." } }
  },
  "decking-calculator": {
    id: "decking-calculator",
    categoryId: "home",
    icon: "Hammer",
    ymyl: false,
    relatedToolIds: ["square-footage-calculator", "board-foot-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "decking calculator", title: "Decking Calculator", description: "Calculate materials for a deck.", intro: "Estimate the number of decking boards needed for your outdoor living space." } }
  },
  "fence-calculator": {
    id: "fence-calculator",
    categoryId: "home",
    icon: "KanbanSquare",
    ymyl: false,
    relatedToolIds: ["square-footage-calculator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "fence calculator", title: "Fence Calculator", description: "Calculate fence materials.", intro: "Estimate how many posts, pickets, and rails you need for a new fence." } }
  },
  "base64-encode-decode": {
    id: "base64-encode-decode",
    categoryId: "developer-tools",
    icon: "FileDigit",
    ymyl: false,
    relatedToolIds: ["url-encode-decode"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "base64 encode decode", title: "Base64 Encoder / Decoder", description: "Encode or decode Base64 strings.", intro: "Quickly convert plain text to Base64 format and vice versa." } }
  },
  "url-encode-decode": {
    id: "url-encode-decode",
    categoryId: "developer-tools",
    icon: "Link",
    ymyl: false,
    relatedToolIds: ["base64-encode-decode", "html-encode-decode"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "url encode decode", title: "URL Encoder / Decoder", description: "Encode or decode URL parameters.", intro: "Safely encode special characters for URLs or decode encoded strings." } }
  },
  "html-encode-decode": {
    id: "html-encode-decode",
    categoryId: "developer-tools",
    icon: "CodeXml",
    ymyl: false,
    relatedToolIds: ["url-encode-decode"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "html encode decode", title: "HTML Encoder / Decoder", description: "Encode or decode HTML entities.", intro: "Convert reserved characters to their corresponding HTML entities safely." } }
  },
  "md5-generator": {
    id: "md5-generator",
    categoryId: "developer-tools",
    icon: "Fingerprint",
    ymyl: false,
    relatedToolIds: ["sha1-generator", "sha256-generator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "md5 generator", title: "MD5 Hash Generator", description: "Generate MD5 hashes from text.", intro: "Quickly compute the MD5 cryptographic hash of any string." } }
  },
  "sha1-generator": {
    id: "sha1-generator",
    categoryId: "developer-tools",
    icon: "Fingerprint",
    ymyl: false,
    relatedToolIds: ["md5-generator", "sha256-generator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "sha1 generator", title: "SHA-1 Hash Generator", description: "Generate SHA-1 hashes from text.", intro: "Compute the SHA-1 hash for any input string instantly." } }
  },
  "sha256-generator": {
    id: "sha256-generator",
    categoryId: "developer-tools",
    icon: "Lock",
    ymyl: false,
    relatedToolIds: ["md5-generator", "sha1-generator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "sha256 generator", title: "SHA-256 Hash Generator", description: "Generate secure SHA-256 hashes.", intro: "Create a highly secure SHA-256 cryptographic hash of any text." } }
  },
  "uuid-generator": {
    id: "uuid-generator",
    categoryId: "developer-tools",
    icon: "Dna",
    ymyl: false,
    relatedToolIds: ["md5-generator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "uuid generator", title: "UUID / GUID Generator", description: "Generate random UUIDs.", intro: "Create valid Version 4 UUIDs (Universally Unique Identifiers) instantly." } }
  },
  "jwt-decoder": {
    id: "jwt-decoder",
    categoryId: "developer-tools",
    icon: "KeySquare",
    ymyl: false,
    relatedToolIds: ["base64-encode-decode"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "jwt decoder", title: "JWT Decoder", description: "Decode JSON Web Tokens.", intro: "Easily inspect the payload and header of a JSON Web Token (JWT) without verification." } }
  },
  "html-minifier": {
    id: "html-minifier",
    categoryId: "developer-tools",
    icon: "Minimize",
    ymyl: false,
    relatedToolIds: ["css-minifier", "js-minifier"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "html minifier", title: "HTML Minifier", description: "Compress HTML code.", intro: "Remove unnecessary whitespace and comments from HTML source code." } }
  },
  "css-minifier": {
    id: "css-minifier",
    categoryId: "developer-tools",
    icon: "Minimize",
    ymyl: false,
    relatedToolIds: ["html-minifier", "js-minifier"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "css minifier", title: "CSS Minifier", description: "Compress CSS code.", intro: "Minify stylesheets to reduce file size and improve loading speed." } }
  },
  "js-minifier": {
    id: "js-minifier",
    categoryId: "developer-tools",
    icon: "Minimize",
    ymyl: false,
    relatedToolIds: ["html-minifier", "css-minifier"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "javascript minifier", title: "JavaScript Minifier", description: "Compress JavaScript code.", intro: "Obfuscate and minify JS code for production deployment." } }
  },
  "sql-formatter": {
    id: "sql-formatter",
    categoryId: "developer-tools",
    icon: "Database",
    ymyl: false,
    relatedToolIds: ["json-formatter", "xml-formatter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "sql formatter", title: "SQL Formatter", description: "Beautify SQL queries.", intro: "Format raw SQL statements with proper indentation and capitalization." } }
  },
  "xml-formatter": {
    id: "xml-formatter",
    categoryId: "developer-tools",
    icon: "Code",
    ymyl: false,
    relatedToolIds: ["json-formatter", "sql-formatter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "xml formatter", title: "XML Formatter", description: "Format and indent XML.", intro: "Beautify ugly or minified XML documents into readable structures." } }
  },
  "word-counter": {
    id: "word-counter",
    categoryId: "text",
    icon: "Type",
    ymyl: false,
    relatedToolIds: ["character-counter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "word counter", title: "Word Counter", description: "Count words and characters.", intro: "Count the number of words, characters, and paragraphs in your text instantly." } }
  },
  "character-counter": {
    id: "character-counter",
    categoryId: "text",
    icon: "CaseSensitive",
    ymyl: false,
    relatedToolIds: ["word-counter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "character counter", title: "Character Counter", description: "Count characters in text.", intro: "Find out exactly how many characters (with or without spaces) your text contains." } }
  },
  "lorem-ipsum-generator": {
    id: "lorem-ipsum-generator",
    categoryId: "text",
    icon: "AlignLeft",
    ymyl: false,
    relatedToolIds: ["bionic-reading-converter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "lorem ipsum generator", title: "Lorem Ipsum Generator", description: "Generate placeholder text.", intro: "Generate standard Lorem Ipsum placeholder text for your design mockups." } }
  },
  "bionic-reading-converter": {
    id: "bionic-reading-converter",
    categoryId: "text",
    icon: "Eye",
    ymyl: false,
    relatedToolIds: ["word-counter"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "bionic reading converter", title: "Bionic Reading Converter", description: "Convert text to Bionic Reading format.", intro: "Convert standard text into Bionic Reading format (first half of words bolded) to drastically increase your reading speed and focus." } }
  },
  "password-generator": {
    id: "password-generator",
    categoryId: "developer-tools",
    icon: "Key",
    ymyl: true,
    relatedToolIds: ["uuid-generator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "password generator", title: "Secure Password Generator", description: "Generate strong passwords.", intro: "Create secure, random passwords with customizable length and character types." } }
  },
  "qr-code-generator": {
    id: "qr-code-generator",
    categoryId: "developer-tools",
    icon: "QrCode",
    ymyl: false,
    relatedToolIds: ["url-encode-decode"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "qr code generator", title: "QR Code Generator", description: "Create QR codes from links.", intro: "Generate a downloadable QR code from any URL or text instantly." } }
  },
  "random-number-generator": {
    id: "random-number-generator",
    categoryId: "developer-tools",
    icon: "Dices",
    ymyl: false,
    relatedToolIds: ["password-generator"],
    locales: { en: { reviewStatus: "reviewed", primaryKeyword: "random number generator", title: "Random Number Generator", description: "Generate random numbers.", intro: "Pick random numbers between a custom minimum and maximum value." } }
  }
};
