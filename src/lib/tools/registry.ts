import { Locale } from "@/i18n/routing";

export type ReviewStatus = "draft" | "reviewed";

export interface ToolLocaleContent {
  reviewStatus: ReviewStatus;
  primaryKeyword?: string;
  title?: string;
  description?: string;
  intro?: string;
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
    "id": "age-calculator",
    "categoryId": "date-time",
    "icon": "Calendar",
    "ymyl": false,
    "relatedToolIds": [
      "date-difference-calculator",
      "days-between-dates"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "percentage-calculator": {
    "id": "percentage-calculator",
    "categoryId": "finance",
    "icon": "Percent",
    "ymyl": false,
    "relatedToolIds": [
      "percentage-increase-calculator",
      "discount-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "json-formatter": {
    "id": "json-formatter",
    "categoryId": "developer-tools",
    "icon": "Code",
    "ymyl": false,
    "relatedToolIds": [
      "base64-encode-decode",
      "url-encode-decode"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "date-difference-calculator": {
    "id": "date-difference-calculator",
    "categoryId": "date-time",
    "icon": "CalendarRange",
    "ymyl": false,
    "relatedToolIds": [
      "age-calculator",
      "days-between-dates",
      "days-until-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "days-between-dates": {
    "id": "days-between-dates",
    "categoryId": "date-time",
    "icon": "CalendarDays",
    "ymyl": false,
    "relatedToolIds": [
      "date-difference-calculator",
      "days-until-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "days-until-calculator": {
    "id": "days-until-calculator",
    "categoryId": "date-time",
    "icon": "Hourglass",
    "ymyl": false,
    "relatedToolIds": [
      "days-between-dates",
      "date-difference-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "weeks-between-dates": {
    "id": "weeks-between-dates",
    "categoryId": "date-time",
    "icon": "CalendarRange",
    "ymyl": false,
    "relatedToolIds": [
      "days-between-dates",
      "months-between-dates"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "months-between-dates": {
    "id": "months-between-dates",
    "categoryId": "date-time",
    "icon": "CalendarRange",
    "ymyl": false,
    "relatedToolIds": [
      "weeks-between-dates",
      "date-difference-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "time-duration-calculator": {
    "id": "time-duration-calculator",
    "categoryId": "date-time",
    "icon": "Clock",
    "ymyl": false,
    "relatedToolIds": [
      "time-difference-calculator",
      "countdown-timer"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "time-difference-calculator": {
    "id": "time-difference-calculator",
    "categoryId": "date-time",
    "icon": "Clock",
    "ymyl": false,
    "relatedToolIds": [
      "time-duration-calculator",
      "world-time-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "unix-timestamp-converter": {
    "id": "unix-timestamp-converter",
    "categoryId": "date-time",
    "icon": "Binary",
    "ymyl": false,
    "relatedToolIds": [
      "world-time-converter",
      "time-zone-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "world-time-converter": {
    "id": "world-time-converter",
    "categoryId": "date-time",
    "icon": "Globe",
    "ymyl": false,
    "relatedToolIds": [
      "time-zone-converter",
      "time-difference-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "time-zone-converter": {
    "id": "time-zone-converter",
    "categoryId": "date-time",
    "icon": "Map",
    "ymyl": false,
    "relatedToolIds": [
      "world-time-converter",
      "time-difference-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "countdown-timer": {
    "id": "countdown-timer",
    "categoryId": "date-time",
    "icon": "Hourglass",
    "ymyl": false,
    "relatedToolIds": [
      "stopwatch",
      "pomodoro-timer"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "stopwatch": {
    "id": "stopwatch",
    "categoryId": "date-time",
    "icon": "Timer",
    "ymyl": false,
    "relatedToolIds": [
      "countdown-timer",
      "pomodoro-timer"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "pomodoro-timer": {
    "id": "pomodoro-timer",
    "categoryId": "date-time",
    "icon": "ClockAlert",
    "ymyl": false,
    "relatedToolIds": [
      "stopwatch",
      "countdown-timer"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "sleep-calculator": {
    "id": "sleep-calculator",
    "categoryId": "date-time",
    "icon": "Moon",
    "ymyl": true,
    "relatedToolIds": [
      "wake-up-time-calculator",
      "bedtime-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "wake-up-time-calculator": {
    "id": "wake-up-time-calculator",
    "categoryId": "date-time",
    "icon": "Sunrise",
    "ymyl": true,
    "relatedToolIds": [
      "sleep-calculator",
      "bedtime-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "bedtime-calculator": {
    "id": "bedtime-calculator",
    "categoryId": "date-time",
    "icon": "Sunset",
    "ymyl": true,
    "relatedToolIds": [
      "sleep-calculator",
      "wake-up-time-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "work-hours-calculator": {
    "id": "work-hours-calculator",
    "categoryId": "date-time",
    "icon": "Briefcase",
    "ymyl": false,
    "relatedToolIds": [
      "overtime-calculator",
      "time-duration-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "overtime-calculator": {
    "id": "overtime-calculator",
    "categoryId": "date-time",
    "icon": "BriefcaseBusiness",
    "ymyl": true,
    "relatedToolIds": [
      "work-hours-calculator",
      "salary-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "salary-calculator": {
    "id": "salary-calculator",
    "categoryId": "finance",
    "icon": "CircleDollarSign",
    "ymyl": true,
    "relatedToolIds": [
      "hourly-to-salary-calculator",
      "tax-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "discount-calculator": {
    "id": "discount-calculator",
    "categoryId": "finance",
    "icon": "Tags",
    "ymyl": false,
    "relatedToolIds": [
      "percentage-calculator",
      "tip-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "tip-calculator": {
    "id": "tip-calculator",
    "categoryId": "finance",
    "icon": "Receipt",
    "ymyl": false,
    "relatedToolIds": [
      "discount-calculator",
      "percentage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "tax-calculator": {
    "id": "tax-calculator",
    "categoryId": "finance",
    "icon": "ReceiptText",
    "ymyl": true,
    "relatedToolIds": [
      "salary-calculator",
      "discount-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "profit-margin-calculator": {
    "id": "profit-margin-calculator",
    "categoryId": "finance",
    "icon": "TrendingUp",
    "ymyl": true,
    "relatedToolIds": [
      "markup-calculator",
      "roi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "markup-calculator": {
    "id": "markup-calculator",
    "categoryId": "finance",
    "icon": "ArrowUpRight",
    "ymyl": true,
    "relatedToolIds": [
      "profit-margin-calculator",
      "break-even-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "break-even-calculator": {
    "id": "break-even-calculator",
    "categoryId": "finance",
    "icon": "Scale",
    "ymyl": true,
    "relatedToolIds": [
      "profit-margin-calculator",
      "roi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "roi-calculator": {
    "id": "roi-calculator",
    "categoryId": "finance",
    "icon": "LineChart",
    "ymyl": true,
    "relatedToolIds": [
      "profit-margin-calculator",
      "simple-interest-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "simple-interest-calculator": {
    "id": "simple-interest-calculator",
    "categoryId": "finance",
    "icon": "Percent",
    "ymyl": true,
    "relatedToolIds": [
      "roi-calculator",
      "compound-interest-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "compound-interest-calculator": {
    "id": "compound-interest-calculator",
    "categoryId": "finance",
    "icon": "TrendingUp",
    "ymyl": true,
    "relatedToolIds": [
      "simple-interest-calculator",
      "investment-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "loan-calculator": {
    "id": "loan-calculator",
    "categoryId": "finance",
    "icon": "BadgeDollarSign",
    "ymyl": true,
    "relatedToolIds": [
      "mortgage-calculator",
      "emi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "mortgage-calculator": {
    "id": "mortgage-calculator",
    "categoryId": "finance",
    "icon": "Home",
    "ymyl": true,
    "relatedToolIds": [
      "loan-calculator",
      "emi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "emi-calculator": {
    "id": "emi-calculator",
    "categoryId": "finance",
    "icon": "Calculator",
    "ymyl": true,
    "relatedToolIds": [
      "loan-calculator",
      "mortgage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "hourly-to-salary-calculator": {
    "id": "hourly-to-salary-calculator",
    "categoryId": "finance",
    "icon": "BadgeDollarSign",
    "ymyl": true,
    "relatedToolIds": [
      "salary-calculator",
      "salary-to-hourly-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "salary-to-hourly-calculator": {
    "id": "salary-to-hourly-calculator",
    "categoryId": "finance",
    "icon": "BadgeDollarSign",
    "ymyl": true,
    "relatedToolIds": [
      "salary-calculator",
      "hourly-to-salary-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "percentage-increase-calculator": {
    "id": "percentage-increase-calculator",
    "categoryId": "finance",
    "icon": "TrendingUp",
    "ymyl": false,
    "relatedToolIds": [
      "percentage-calculator",
      "percentage-decrease-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "percentage-decrease-calculator": {
    "id": "percentage-decrease-calculator",
    "categoryId": "finance",
    "icon": "TrendingDown",
    "ymyl": false,
    "relatedToolIds": [
      "percentage-calculator",
      "percentage-increase-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "investment-calculator": {
    "id": "investment-calculator",
    "categoryId": "finance",
    "icon": "LineChart",
    "ymyl": true,
    "relatedToolIds": [
      "compound-interest-calculator",
      "roi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "currency-converter": {
    "id": "currency-converter",
    "categoryId": "finance",
    "icon": "Globe",
    "ymyl": true,
    "relatedToolIds": [
      "salary-calculator",
      "percentage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "length-converter": {
    "id": "length-converter",
    "categoryId": "converters",
    "icon": "Ruler",
    "ymyl": false,
    "relatedToolIds": [
      "area-converter",
      "height-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "weight-converter": {
    "id": "weight-converter",
    "categoryId": "converters",
    "icon": "Scale3d",
    "ymyl": false,
    "relatedToolIds": [
      "volume-converter",
      "length-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "height-converter": {
    "id": "height-converter",
    "categoryId": "converters",
    "icon": "ArrowUpDown",
    "ymyl": false,
    "relatedToolIds": [
      "length-converter",
      "bmi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "temperature-converter": {
    "id": "temperature-converter",
    "categoryId": "converters",
    "icon": "Thermometer",
    "ymyl": false,
    "relatedToolIds": [
      "length-converter",
      "weight-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "area-converter": {
    "id": "area-converter",
    "categoryId": "converters",
    "icon": "Square",
    "ymyl": false,
    "relatedToolIds": [
      "length-converter",
      "volume-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "volume-converter": {
    "id": "volume-converter",
    "categoryId": "converters",
    "icon": "Box",
    "ymyl": false,
    "relatedToolIds": [
      "area-converter",
      "weight-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "speed-converter": {
    "id": "speed-converter",
    "categoryId": "converters",
    "icon": "Gauge",
    "ymyl": false,
    "relatedToolIds": [
      "length-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "data-storage-converter": {
    "id": "data-storage-converter",
    "categoryId": "converters",
    "icon": "HardDrive",
    "ymyl": false,
    "relatedToolIds": [],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "number-base-converter": {
    "id": "number-base-converter",
    "categoryId": "converters",
    "icon": "Binary",
    "ymyl": false,
    "relatedToolIds": [
      "binary-to-decimal",
      "decimal-to-binary"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "binary-to-decimal": {
    "id": "binary-to-decimal",
    "categoryId": "converters",
    "icon": "Binary",
    "ymyl": false,
    "relatedToolIds": [
      "decimal-to-binary",
      "number-base-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "decimal-to-binary": {
    "id": "decimal-to-binary",
    "categoryId": "converters",
    "icon": "Binary",
    "ymyl": false,
    "relatedToolIds": [
      "binary-to-decimal",
      "number-base-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "hex-to-decimal": {
    "id": "hex-to-decimal",
    "categoryId": "converters",
    "icon": "Hash",
    "ymyl": false,
    "relatedToolIds": [
      "number-base-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "roman-numeral-converter": {
    "id": "roman-numeral-converter",
    "categoryId": "converters",
    "icon": "Landmark",
    "ymyl": false,
    "relatedToolIds": [],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "fraction-calculator": {
    "id": "fraction-calculator",
    "categoryId": "education",
    "icon": "Divide",
    "ymyl": false,
    "relatedToolIds": [
      "ratio-calculator",
      "percentage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "ratio-calculator": {
    "id": "ratio-calculator",
    "categoryId": "education",
    "icon": "Percent",
    "ymyl": false,
    "relatedToolIds": [
      "fraction-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "average-calculator": {
    "id": "average-calculator",
    "categoryId": "education",
    "icon": "Sigma",
    "ymyl": false,
    "relatedToolIds": [
      "gpa-calculator",
      "grade-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "gpa-calculator": {
    "id": "gpa-calculator",
    "categoryId": "education",
    "icon": "GraduationCap",
    "ymyl": true,
    "relatedToolIds": [
      "grade-calculator",
      "final-grade-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "grade-calculator": {
    "id": "grade-calculator",
    "categoryId": "education",
    "icon": "BookOpenCheck",
    "ymyl": false,
    "relatedToolIds": [
      "final-grade-calculator",
      "gpa-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "final-grade-calculator": {
    "id": "final-grade-calculator",
    "categoryId": "education",
    "icon": "Target",
    "ymyl": true,
    "relatedToolIds": [
      "grade-calculator",
      "gpa-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "bmi-calculator": {
    "id": "bmi-calculator",
    "categoryId": "health",
    "icon": "Activity",
    "ymyl": true,
    "relatedToolIds": [
      "bmr-calculator",
      "body-fat-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "bmr-calculator": {
    "id": "bmr-calculator",
    "categoryId": "health",
    "icon": "Flame",
    "ymyl": true,
    "relatedToolIds": [
      "bmi-calculator",
      "calorie-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "calorie-calculator": {
    "id": "calorie-calculator",
    "categoryId": "health",
    "icon": "Utensils",
    "ymyl": true,
    "relatedToolIds": [
      "macro-calculator",
      "bmr-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "macro-calculator": {
    "id": "macro-calculator",
    "categoryId": "health",
    "icon": "PieChart",
    "ymyl": true,
    "relatedToolIds": [
      "calorie-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "body-fat-calculator": {
    "id": "body-fat-calculator",
    "categoryId": "health",
    "icon": "User",
    "ymyl": true,
    "relatedToolIds": [
      "bmi-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "water-intake-calculator": {
    "id": "water-intake-calculator",
    "categoryId": "health",
    "icon": "Droplet",
    "ymyl": true,
    "relatedToolIds": [
      "calorie-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "pace-calculator": {
    "id": "pace-calculator",
    "categoryId": "health",
    "icon": "Timer",
    "ymyl": false,
    "relatedToolIds": [
      "running-distance-calculator",
      "speed-distance-time-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "running-distance-calculator": {
    "id": "running-distance-calculator",
    "categoryId": "health",
    "icon": "MapPin",
    "ymyl": false,
    "relatedToolIds": [
      "pace-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "speed-distance-time-calculator": {
    "id": "speed-distance-time-calculator",
    "categoryId": "health",
    "icon": "Navigation",
    "ymyl": false,
    "relatedToolIds": [
      "pace-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "square-footage-calculator": {
    "id": "square-footage-calculator",
    "categoryId": "home",
    "icon": "Square",
    "ymyl": false,
    "relatedToolIds": [
      "cost-per-square-foot-calculator",
      "paint-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "paint-calculator": {
    "id": "paint-calculator",
    "categoryId": "home",
    "icon": "PaintRoller",
    "ymyl": false,
    "relatedToolIds": [
      "square-footage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "tile-calculator": {
    "id": "tile-calculator",
    "categoryId": "home",
    "icon": "LayoutGrid",
    "ymyl": false,
    "relatedToolIds": [
      "square-footage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "concrete-calculator": {
    "id": "concrete-calculator",
    "categoryId": "home",
    "icon": "Truck",
    "ymyl": false,
    "relatedToolIds": [
      "square-footage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "board-foot-calculator": {
    "id": "board-foot-calculator",
    "categoryId": "home",
    "icon": "Trees",
    "ymyl": false,
    "relatedToolIds": [],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "cost-per-square-foot-calculator": {
    "id": "cost-per-square-foot-calculator",
    "categoryId": "home",
    "icon": "CircleDollarSign",
    "ymyl": true,
    "relatedToolIds": [
      "square-footage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "mulch-calculator": {
    "id": "mulch-calculator",
    "categoryId": "home",
    "icon": "Leaf",
    "ymyl": false,
    "relatedToolIds": [
      "plant-spacing-calculator",
      "square-footage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "plant-spacing-calculator": {
    "id": "plant-spacing-calculator",
    "categoryId": "home",
    "icon": "Sprout",
    "ymyl": false,
    "relatedToolIds": [
      "mulch-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "step-calculator": {
    "id": "step-calculator",
    "categoryId": "home",
    "icon": "ListOrdered",
    "ymyl": false,
    "relatedToolIds": [
      "decking-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "decking-calculator": {
    "id": "decking-calculator",
    "categoryId": "home",
    "icon": "Hammer",
    "ymyl": false,
    "relatedToolIds": [
      "square-footage-calculator",
      "board-foot-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "fence-calculator": {
    "id": "fence-calculator",
    "categoryId": "home",
    "icon": "KanbanSquare",
    "ymyl": false,
    "relatedToolIds": [
      "square-footage-calculator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "base64-encode-decode": {
    "id": "base64-encode-decode",
    "categoryId": "developer-tools",
    "icon": "FileDigit",
    "ymyl": false,
    "relatedToolIds": [
      "url-encode-decode"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "url-encode-decode": {
    "id": "url-encode-decode",
    "categoryId": "developer-tools",
    "icon": "Link",
    "ymyl": false,
    "relatedToolIds": [
      "base64-encode-decode",
      "html-encode-decode"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "html-encode-decode": {
    "id": "html-encode-decode",
    "categoryId": "developer-tools",
    "icon": "CodeXml",
    "ymyl": false,
    "relatedToolIds": [
      "url-encode-decode"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "md5-generator": {
    "id": "md5-generator",
    "categoryId": "developer-tools",
    "icon": "Fingerprint",
    "ymyl": false,
    "relatedToolIds": [
      "sha1-generator",
      "sha256-generator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "sha1-generator": {
    "id": "sha1-generator",
    "categoryId": "developer-tools",
    "icon": "Fingerprint",
    "ymyl": false,
    "relatedToolIds": [
      "md5-generator",
      "sha256-generator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "sha256-generator": {
    "id": "sha256-generator",
    "categoryId": "developer-tools",
    "icon": "Lock",
    "ymyl": false,
    "relatedToolIds": [
      "md5-generator",
      "sha1-generator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "uuid-generator": {
    "id": "uuid-generator",
    "categoryId": "developer-tools",
    "icon": "Dna",
    "ymyl": false,
    "relatedToolIds": [
      "md5-generator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "jwt-decoder": {
    "id": "jwt-decoder",
    "categoryId": "developer-tools",
    "icon": "KeySquare",
    "ymyl": false,
    "relatedToolIds": [
      "base64-encode-decode"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "html-minifier": {
    "id": "html-minifier",
    "categoryId": "developer-tools",
    "icon": "Minimize",
    "ymyl": false,
    "relatedToolIds": [
      "css-minifier",
      "js-minifier"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "css-minifier": {
    "id": "css-minifier",
    "categoryId": "developer-tools",
    "icon": "Minimize",
    "ymyl": false,
    "relatedToolIds": [
      "html-minifier",
      "js-minifier"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "js-minifier": {
    "id": "js-minifier",
    "categoryId": "developer-tools",
    "icon": "Minimize",
    "ymyl": false,
    "relatedToolIds": [
      "html-minifier",
      "css-minifier"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "sql-formatter": {
    "id": "sql-formatter",
    "categoryId": "developer-tools",
    "icon": "Database",
    "ymyl": false,
    "relatedToolIds": [
      "json-formatter",
      "xml-formatter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "xml-formatter": {
    "id": "xml-formatter",
    "categoryId": "developer-tools",
    "icon": "Code",
    "ymyl": false,
    "relatedToolIds": [
      "json-formatter",
      "sql-formatter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "word-counter": {
    "id": "word-counter",
    "categoryId": "text",
    "icon": "Type",
    "ymyl": false,
    "relatedToolIds": [
      "character-counter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "character-counter": {
    "id": "character-counter",
    "categoryId": "text",
    "icon": "CaseSensitive",
    "ymyl": false,
    "relatedToolIds": [
      "word-counter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "lorem-ipsum-generator": {
    "id": "lorem-ipsum-generator",
    "categoryId": "text",
    "icon": "AlignLeft",
    "ymyl": false,
    "relatedToolIds": [
      "bionic-reading-converter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "bionic-reading-converter": {
    "id": "bionic-reading-converter",
    "categoryId": "text",
    "icon": "Eye",
    "ymyl": false,
    "relatedToolIds": [
      "word-counter"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "password-generator": {
    "id": "password-generator",
    "categoryId": "developer-tools",
    "icon": "Key",
    "ymyl": true,
    "relatedToolIds": [
      "uuid-generator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "qr-code-generator": {
    "id": "qr-code-generator",
    "categoryId": "developer-tools",
    "icon": "QrCode",
    "ymyl": false,
    "relatedToolIds": [
      "url-encode-decode"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  },
  "random-number-generator": {
    "id": "random-number-generator",
    "categoryId": "developer-tools",
    "icon": "Dices",
    "ymyl": false,
    "relatedToolIds": [
      "password-generator"
    ],
    "locales": {
      "en": {
        "reviewStatus": "reviewed"
      },
      "ar": {
        "reviewStatus": "reviewed"
      },
      "bn": {
        "reviewStatus": "reviewed"
      },
      "de": {
        "reviewStatus": "reviewed"
      },
      "es": {
        "reviewStatus": "reviewed"
      },
      "fr": {
        "reviewStatus": "reviewed"
      },
      "hi": {
        "reviewStatus": "reviewed"
      },
      "id": {
        "reviewStatus": "reviewed"
      },
      "it": {
        "reviewStatus": "reviewed"
      },
      "ja": {
        "reviewStatus": "reviewed"
      },
      "ko": {
        "reviewStatus": "reviewed"
      },
      "nl": {
        "reviewStatus": "reviewed"
      },
      "pl": {
        "reviewStatus": "reviewed"
      },
      "pt": {
        "reviewStatus": "reviewed"
      },
      "ru": {
        "reviewStatus": "reviewed"
      },
      "tr": {
        "reviewStatus": "reviewed"
      }
    }
  }
};
