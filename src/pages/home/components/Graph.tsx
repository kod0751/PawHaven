import Container from '../../../shared/ui/ResponsiveContainer';
import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useAnimalList } from '../../../features/animal-list-management/model/useAnimalList';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const STATE = ['보호중', '자연사', '반환', '입양', '방사', '기증', '안락사'];
const LEGION = [
  '수원시',
  '성남시',
  '용인시',
  '부천시',
  '화성시',
  '평택시',
  '고양시',
  '오산시',
  '안양시',
  '광명시',
  '군포시',
  '이천시',
  '시흥시',
  '양주시',
  '하남시',
  '포천시',
  '여주시',
  '안산시',
  '김포시',
  '의왕시',
  '구리시',
  '남양주시',
  '의정부시',
  '동두천시',
];

export default function Graph() {
  const { data } = useAnimalList();

  const [stateCount, setStateCount] = useState<number[]>([]); // 상태별 동물 수 저장
  const [legionCount, setLegionCount] = useState<number[]>([]); // 시군구별 동물 수 저장

  useEffect(() => {
    const stateCount = new Array(7).fill(0);
    const legionCount = new Array(24).fill(0);
    // 상태별 동물 수 계산
    data?.forEach((value) => {
      STATE.forEach((state, index) => {
        if (value.STATE_NM.includes(state)) {
          stateCount[index]++;
        }
      });
      // 시군구별 동물 수 계산
      LEGION.forEach((legion, index) => {
        if (value.SIGUN_NM.includes(legion)) {
          legionCount[index]++;
        }
      });
    });
    setStateCount(stateCount);
    setLegionCount(legionCount);
  }, [data]);

  const barOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '상태별 유기동물 수',
        font: {
          size: 16,
        },
      },
    },
  };

  const doughnutOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '시별 유기동물 수',
        font: {
          size: 16,
        },
      },
    },
  };

  const barData: ChartData<'bar'> = {
    labels: STATE,
    datasets: [
      {
        label: '마리',
        data: stateCount,
        backgroundColor: [
          '#FFB3BA',
          '#FFDFBA',
          '#FFFFBA',
          '#BFFCC6',
          '#BAE1FF',
          '#D4C4FB',
          '#FFC4E1',
        ],
        hoverBackgroundColor: [
          '#FF9AA2',
          '#FFCC99',
          '#FFFF99',
          '#99FFB3',
          '#99CCFF',
          '#C1B3F9',
          '#FFA3D1',
        ],
      },
    ],
  };

  const doughnutData: ChartData<'doughnut'> = {
    labels: LEGION,
    datasets: [
      {
        label: '시군구',
        data: legionCount,
        backgroundColor: [
          '#FFB3BA',
          '#FFDFBA',
          '#FFFFBA',
          '#BFFCC6',
          '#BAE1FF',
          '#D4C4FB',
          '#FFC4E1',
        ],
        hoverBackgroundColor: [
          '#FF9AA2',
          '#FFCC99',
          '#FFFF99',
          '#99FFB3',
          '#99CCFF',
          '#C1B3F9',
          '#FFA3D1',
        ],
      },
    ],
  };

  return (
    <section aria-labelledby="animal-graph-title" className="py-12">
      <Container>
        <h2
          id="animal-graph-title"
          className="flex flex-col font-[NanumSquareNeoExtraBold] text-3xl gap-1 lg:text-4xl"
        >
          <div>경기도</div>
          <div>
            <span className="text-orange-500">유기동물</span> 현황
          </div>
        </h2>

        <div className="py-10 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <figure
              className="w-full md:w-1/2 bg-white p-4"
              aria-label="시별 유기동물 수 도넛 차트"
            >
              <div className="h-64 md:h-80">
                <Doughnut options={doughnutOptions} data={doughnutData} />
              </div>
            </figure>

            <figure
              className="w-full md:w-1/2 bg-white p-4"
              aria-label="상태별 유기동물 수 막대 차트"
            >
              <div className="h-64 md:h-80">
                <Bar options={barOptions} data={barData} />
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
