function BookCard({ title, author, rating, comment }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">著者：{author}</p>
      <p className="mt-2">評価：{rating} / 5</p>
      <p className="mt-3 text-gray-700">{comment}</p>
    </article>
  )
}

export default BookCard