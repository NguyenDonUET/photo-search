import Footer from "./components/Footer"
import Gallary from "./components/Gallary"
import PaginatedItems from "./components/PaginatedItems"
import SearchForm from "./components/SearchForm"
import ThemeToggle from "./components/ThemeToggle"

const App = () => {
  return (
    <main
      className='dark:bg-darkModeBgColor dark:text-darkModeTextColor
        '
    >
      <ThemeToggle />
      <SearchForm />
      <Gallary />
      <PaginatedItems itemsPerPage={2} />
      <Footer />
    </main>
  )
}
export default App
