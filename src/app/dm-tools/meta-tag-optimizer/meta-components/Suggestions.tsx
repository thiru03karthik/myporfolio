// import { checkSEO } from '../seo-utils/seoUtils'

// export default function Suggestions({
//   title,
//   description,
//   keyword
// }: {
//   title: string
//   description: string
//   keyword: string
// }) {
//   const { tips } = checkSEO(title, description, keyword)

//   // Only show keyword/global tips (exclude inline ones)
//   const filteredTips = tips.filter(
//     (t) => t.field === 'keyword' || t.field === 'global'
//   )

//   if (filteredTips.length === 0) return null

//   return (
//     <div className="mt-6 space-y-2">
//       <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Suggestions</h2>
//       {filteredTips.map((item, index) => (
//         <div
//           key={index}
//           className={`rounded-md px-3 py-2 text-sm ${
//             item.status === 'good'
//               ? 'bg-green-50 text-green-700 dark:bg-green-900/10 dark:text-green-300'
//               : item.status === 'warn'
//               ? 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900/10 dark:text-yellow-300'
//               : 'bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-300'
//           }`}
//         >
//           {item.message}
//         </div>
//       ))}
//     </div>
//   )
// }
