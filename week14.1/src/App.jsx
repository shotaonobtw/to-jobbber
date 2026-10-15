import BookCard from './components/BookCard'

const books = [
  {
    id: 1,
    title: 'コンビニ人間',
    author: '村田沙耶香',
    rating: 5,
    comment: '独特な視点で「普通とは何か」を考えさせてくれる一冊です。',
  },
  {
    id: 2,
    title: 'そして、バトンは渡された',
    author: '瀬尾まいこ',
    rating: 4,
    comment: '家族のつながりがあたたかく描かれていて、読みやすいです。',
  },
  {
    id: 3,
    title: '嫌われる勇気',
    author: '岸見一郎・古賀史健',
    rating: 4,
    comment: '人との関わり方を別の角度から考えるきっかけになります。',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-amber-50 px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold tracking-widest text-amber-700">
            MY BOOKSHELF
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">おすすめの本</h1>
          <p className="mt-3 text-gray-600">
            読んでよかった本を紹介します。
          </p>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              rating={book.rating}
              comment={book.comment}
            />
          ))}
        </section>
      </div>
    </main>
  )
}

export default App