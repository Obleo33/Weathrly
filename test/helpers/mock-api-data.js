const data = {
  current_observation: {
    temp_f: 41
  },
  location: {
    state: 'CO',
    city: 'Denver',
    zip: '80201',
  },
  forecast: {
    txt_forecast: {
      date: '10:37 AM MST',
      forecastday: [
        {
          period: 0,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Sunday',
          fcttext: 'Sunny. High 43F. Winds light and variable.',
          fcttext_metric: 'Abundant sunshine. High 6C. Winds SSE at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 1,
          icon: 'nt_clear',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
          title: 'Sunday Night',
          fcttext: 'Clear skies. Low 23F. Winds light and variable.',
          fcttext_metric: 'Clear skies. Low around -5C. Winds light and variable.',
          pop: '0'
        },
        {
          period: 2,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Monday',
          fcttext: 'Generally sunny despite a few afternoon clouds. High 53F. Winds SSW at 10 to 20 mph.',
          fcttext_metric: 'Sunshine and some clouds. High 12C. Winds SSW at 15 to 30 km/h.',
          pop: '0'
        },
        {
          period: 3,
          icon: 'nt_mostlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif',
          title: 'Monday Night',
          fcttext: 'Partly cloudy skies in the evening, then becoming cloudy overnight. Low 29F. Winds SSE at 5 to 10 mph.',
          fcttext_metric: 'Partly cloudy during the evening followed by cloudy skies overnight. Low -2C. Winds SSE at 10 to 15 km/h.',
          pop: '10'
        },
        {
          period: 4,
          icon: 'cloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
          title: 'Tuesday',
          fcttext: 'Cloudy skies. High 39F. SSE winds shifting to NNE at 10 to 20 mph.',
          fcttext_metric: 'Cloudy. High 4C. SSE winds shifting to NNE at 15 to 30 km/h.',
          pop: '20'
        },
        {
          period: 5,
          icon: 'nt_partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
          title: 'Tuesday Night',
          fcttext: 'Partly cloudy skies. Low 19F. Winds W at 10 to 15 mph.',
          fcttext_metric: 'Some clouds early will give way to generally clear conditions overnight. Low -7C. Winds W at 15 to 25 km/h.',
          pop: '10'
        },
        {
          period: 6,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Wednesday',
          fcttext: 'A mainly sunny sky. High around 45F. Winds SW at 5 to 10 mph.',
          fcttext_metric: 'Sunny skies. High 7C. Winds SW at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 7,
          icon: 'nt_clear',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
          title: 'Wednesday Night',
          fcttext: 'Clear. Low 21F. Winds SW at 5 to 10 mph.',
          fcttext_metric: 'Clear skies. Low -6C. Winds SW at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 8,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Thursday',
          fcttext: 'Sunny skies. High around 50F. Winds SE at 5 to 10 mph.',
          fcttext_metric: 'Mostly sunny. High around 10C. Winds SE at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 9,
          icon: 'nt_partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
          title: 'Thursday Night',
          fcttext: 'Partly cloudy. Low 24F. Winds SW at 5 to 10 mph.',
          fcttext_metric: 'A few clouds. Low -4C. Winds SW at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 10,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Friday',
          fcttext: 'Sunshine. High 59F. Winds SW at 5 to 10 mph.',
          fcttext_metric: 'Generally sunny. High near 15C. Winds SW at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 11,
          icon: 'nt_clear',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
          title: 'Friday Night',
          fcttext: 'Mostly clear skies. Low 31F. Winds SW at 10 to 15 mph.',
          fcttext_metric: 'A few clouds from time to time. Low near 0C. Winds SW at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 12,
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          title: 'Saturday',
          fcttext: 'Partly cloudy. High 66F. Winds SW at 10 to 15 mph.',
          fcttext_metric: 'Intervals of clouds and sunshine. High 19C. Winds SW at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 13,
          icon: 'nt_partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
          title: 'Saturday Night',
          fcttext: 'Partly cloudy. Low 37F. Winds SW at 10 to 15 mph.',
          fcttext_metric: 'Partly cloudy. Low 3C. Winds SW at 15 to 25 km/h.',
          pop: '0'
        },
        {
          period: 14,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Sunday',
          fcttext: 'Sunshine along with some cloudy intervals. High 64F. Winds WSW at 10 to 20 mph.',
          fcttext_metric: 'A few clouds early, otherwise mostly sunny. High 18C. Winds WSW at 15 to 30 km/h.',
          pop: '0'
        },
        {
          period: 15,
          icon: 'nt_partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
          title: 'Sunday Night',
          fcttext: 'Partly cloudy skies. Low 34F. Winds WSW at 5 to 10 mph.',
          fcttext_metric: 'Partly cloudy skies. Low 1C. Winds WSW at 10 to 15 km/h.',
          pop: '10'
        },
        {
          period: 16,
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          title: 'Monday',
          fcttext: 'Partly cloudy skies. High 61F. Winds NNE at 5 to 10 mph.',
          fcttext_metric: 'Partly cloudy skies. High 16C. Winds NNE at 10 to 15 km/h.',
          pop: '0'
        },
        {
          period: 17,
          icon: 'nt_clear',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
          title: 'Monday Night',
          fcttext: 'A mostly clear sky. Low 33F. Winds WSW at 5 to 10 mph.',
          fcttext_metric: 'Clear. Low 1C. Winds WSW at 10 to 15 km/h.',
          pop: '10'
        },
        {
          period: 18,
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
          title: 'Tuesday',
          fcttext: 'Generally sunny. High 64F. Winds W at 5 to 10 mph.',
          fcttext_metric: 'Generally sunny. High 18C. Winds W at 10 to 15 km/h.',
          pop: '10'
        },
        {
          period: 19,
          icon: 'nt_partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/nt_partlycloudy.gif',
          title: 'Tuesday Night',
          fcttext: 'Partly cloudy. Low 34F. Winds light and variable.',
          fcttext_metric: 'Partly cloudy. Low 1C. Winds light and variable.',
          pop: '20'
        }
      ]
    },
    simpleforecast: {
      forecastday: [
        {
          date: {
            day: 26,
            month: 2,
            monthname_short: 'Feb',
            weekday_short: 'Sun',
          },
          period: 1,
          high: {
            fahrenheit: '43',
          },
          low: {
            fahrenheit: '23',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        },
        {
          date: {
            day: 27,
            month: 2,
            monthname_short: 'Feb',
            weekday_short: 'Mon',
          },
          period: 2,
          high: {
            fahrenheit: '53',
          },
          low: {
            fahrenheit: '29',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        },
        {
          date: {
            day: 28,
            month: 2,
            monthname_short: 'Feb',
            weekday_short: 'Tue',
          },
          period: 3,
          high: {
            fahrenheit: '39',
          },
          low: {
            fahrenheit: '19',
          },
          conditions: 'Overcast',
          icon: 'cloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/cloudy.gif',
        },
        {
          date: {
            day: 1,
            month: 3,
            monthname_short: 'Mar',
            weekday_short: 'Wed',
          },
          period: 4,
          high: {
            fahrenheit: '45',
          },
          low: {
            fahrenheit: '21',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        },
        {
          date: {
            day: 2,
            month: 3,
            monthname_short: 'Mar',
            weekday_short: 'Thu',
          },
          period: 5,
          high: {
            fahrenheit: '50',
          },
          low: {
            fahrenheit: '24',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        },
        {
          date: {
          day: 3,
          month: 3,
          monthname_short: 'Mar',
          weekday_short: 'Fri',
          },
          period: 6,
          high: {
            fahrenheit: '59',
          },
          low: {
            fahrenheit: '31',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        },
        {
          date: {
            day: 4,
            month: 3,
            monthname_short: 'Mar',
            weekday_short: 'Sat',
          },
          period: 7,
          high: {
            fahrenheit: '66',
          },
          low: {
            fahrenheit: '37',
          },
          conditions: 'Partly Cloudy',
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        },
        {
          date: {
            day: 5,
            month: 3,
            year: 2017,
            monthname_short: 'Mar',
            weekday_short: 'Sun',
          },
          period: 8,
          high: {
            fahrenheit: '64',
          },
          low: {
            fahrenheit: '34',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        },
        {
          date: {
            day: 6,
            month: 3,
            year: 2017,
            monthname_short: 'Mar',
            weekday_short: 'Mon',
          },
          period: 9,
          high: {
            fahrenheit: '61',
          },
          low: {
            fahrenheit: '33',
          },
          conditions: 'Partly Cloudy',
          icon: 'partlycloudy',
          icon_url: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        },
        {
          date: {
          day: 7,
          month: 3,
          year: 2017,
          monthname_short: 'Mar',
          weekday_short: 'Tue',
          weekday: 'Tuesday',
          },
          period: 10,
          high: {
            fahrenheit: '64',
          },
          low: {
            fahrenheit: '34',
          },
          conditions: 'Clear',
          icon: 'clear',
          icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
        }
      ]
    }
  },
  hourly_forecast: [
    {
      FCTTIME: {
        civil: '12:00 PM',
      },
      temp: {
        english: '40',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
    },
    {
      FCTTIME: {
        civil: '1:00 PM',
      },
      temp: {
        english: '42',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
    },
    {
      FCTTIME: {
      civil: '2:00 PM',
      },
      temp: {
        english: '43',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/clear.gif'
    },
    {
      FCTTIME: {
        civil: '3:00 PM',
      },
      temp: {
        english: '42',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
    },
    {
      FCTTIME: {
        civil: '4:00 PM',
      },
      temp: {
        english: '42',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
    },
    {
      FCTTIME: {
        civil: '5:00 PM',
      },
      temp: {
        english: '39',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/clear.gif',
    },
    {
      FCTTIME: {
        civil: '6:00 PM',
      },
      temp: {
        english: '35',
      },
      icon: 'clear',
      icon_url: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
    }
  ]
}
