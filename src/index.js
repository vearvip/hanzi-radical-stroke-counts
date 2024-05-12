import zdicRadicalStrokeCountsData from './dataSource/zdic_radical_stroke_counts.json' assert { type: "json" };

export function queryRadicalStrokeCounts(hanzi) {
  return zdicRadicalStrokeCountsData[hanzi]
} 
 