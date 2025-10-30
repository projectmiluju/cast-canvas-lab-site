import styles from './Problem.module.scss';

const problems = [
  {
    tool: 'Notion',
    issue: '정보를 쌓기엔 좋지만, 공간적으로 펼쳐보기 어렵습니다.',
  },
  {
    tool: 'Figma',
    issue: '시각적이지만, 문서를 다루기엔 적합하지 않습니다.',
  },
  {
    tool: 'Miro',
    issue: '보드는 넓지만, 리서치 문서 중심의 워크플로우에는 부족합니다.',
  },
];

export default function Problem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>리서치 도구, 뭔가 부족하지 않았나요?</h2>
        <p className={styles.subtitle}>
          기존 도구들은 각자의 강점이 있지만, 문서와 이미지를 공간 위에서 자유롭게 다루기엔 한계가
          있습니다.
        </p>
        <ul className={styles.list}>
          {problems.map(({ tool, issue }) => (
            <li key={tool} className={styles.card}>
              <span className={styles.tool}>{tool}</span>
              <p className={styles.issue}>{issue}</p>
            </li>
          ))}
        </ul>
        <p className={styles.conclusion}>
          CastCanvas Lab은 <strong>공간적 사고와 문서 중심 리서치</strong>를 하나로 연결합니다.
        </p>
      </div>
    </section>
  );
}
