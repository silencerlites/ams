import { useEffect } from 'react'

export const useCounter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('[data-count]')

    const runCounter = (el: HTMLElement) => {
      const target = Number(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      let current = 0
      const increment = target / 60

      const update = () => {
        current += increment
        if (current < target) {
          el.textContent = Math.floor(current) + suffix
          requestAnimationFrame(update)
        } else {
          el.textContent = target + suffix
        }
      }

      update()
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (
            entry.isIntersecting &&
            !entry.target.classList.contains('counted')
          ) {
            entry.target.classList.add('counted')
            runCounter(entry.target as HTMLElement)
          }
        })
      },
      { threshold: 0.5 }
    )

    counters.forEach(counter => observer.observe(counter))

    return () => observer.disconnect()
  }, [])
}
