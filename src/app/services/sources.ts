import { EChartsOption } from "echarts";

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Medal = {
  __typename?: 'Medals';
  Colour: Scalars['String'];
  Day: Scalars['Int'];
  Event: Scalars['String'];
  Gender: Scalars['String'];
  Sport: Scalars['String'];
};

export type Medals = Medal[];

export const defData: Medal[] = [
  {
    __typename: 'Medals',
    Colour: 'bronze',
    Day: 3,
    Event: 'Under 57kg',
    Gender: 'women',
    Sport: 'Judo',
  }
];

export const chartOptions: EChartsOption = {
  tooltip: {
      trigger: 'item'
  },
  legend: {
      top: '5%',
      left: 'center'
  },
  series: [
      {
          name: 'medals',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
          },
          label: {
              show: false,
              position: 'center'
          },
          emphasis: {
              label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold'
              }
          },
          labelLine: {
              show: false
          },
          data: [{name: 'women', value: 50}, {name: 'men', value: 50}]
      }
  ]
};
