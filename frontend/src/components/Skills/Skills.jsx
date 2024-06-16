import { useEffect } from 'react'
import './skills.css'

const Skills = () => {
  const scrollers = document.querySelectorAll('.scroller')
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation()
  }

  function addAnimation() {
    console.log('addAnimation')
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true)

      const scrollerInner = scroller.querySelector('.scroller_inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
    })
  }

  useEffect(() => {
    addAnimation()
  }, [])

  return (
    <div className="skills">
      <div className="titleSection">
        <h1>Skills</h1>
      </div>
      <div className="scroller">
        <ul className="tag-list scroller_inner">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#0277BD"
                d="M24.047 5c-1.555.005-2.633.142-3.936.367-3.848.67-4.549 2.077-4.549 4.67V14h9v2H10.87c-2.636 0-4.943 1.242-5.674 4.219-.826 3.417-.863 5.557 0 9.125C5.851 32.005 7.294 34 9.931 34h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672.061-.006-1.756-.371-3.298-.365zm-4.984 4c.821 0 1.5.677 1.5 1.502a1.5 1.5 0 0 1-1.5 1.498 1.49 1.49 0 0 1-1.5-1.498A1.5 1.5 0 0 1 19.063 9z"
              />
              <path
                fill="#FFC107"
                d="M23.078 43c1.555-.005 2.633-.142 3.936-.367 3.848-.67 4.549-2.077 4.549-4.67V34h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.219.826-3.417.863-5.557 0-9.125C41.274 15.995 39.831 14 37.194 14h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.439 1.759 4.263 4.218 4.672-.061.006 1.756.371 3.298.365zm4.985-4c-.821 0-1.5-.677-1.5-1.502a1.5 1.5 0 0 1 1.5-1.498c.837 0 1.5.664 1.5 1.498 0 .822-.664 1.502-1.5 1.502z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path fill="#E65100" d="M41 5H7l3 34 14 4 14-4 3-34z" />
              <path fill="#FF6D00" d="M24 8v31.9l11.2-3.2L37.7 8z" />
              <path
                fill="#FFF"
                d="M24 25v-4h8.6l-.7 11.5-7.9 2.6v-4.2l4.1-1.4.3-4.5H24zm8.9-8 .3-4H24v4h8.9z"
              />
              <path
                fill="#EEE"
                d="M24 30.9v4.2l-7.9-2.6-.4-5.5h4l.2 2.5 4.1 1.4zM19.1 17H24v-4h-9.1l.7 12H24v-4h-4.6l-.3-4z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#80deea"
                d="M24 34C11.1 34 1 29.6 1 24s10.1-10 23-10 23 4.4 23 10-10.1 10-23 10zm0-18c-12.6 0-21 4.1-21 8 0 3.9 8.4 8 21 8s21-4.1 21-8c0-3.9-8.4-8-21-8z"
              />
              <path
                fill="#80deea"
                d="M15.1 44.6c-1 0-1.8-.2-2.6-.7-4.9-2.8-3.6-13.7 2.8-24.9 3-5.2 6.7-9.6 10.3-12.4 3.9-3 7.4-3.9 9.8-2.5 2.5 1.4 3.4 4.9 2.8 9.8-.6 4.6-2.6 10-5.6 15.2-3 5.2-6.7 9.6-10.3 12.4-2.6 2-5.1 3.1-7.2 3.1zM32.9 5.4c-1.6 0-3.7.9-6 2.7C23.5 10.8 20 15 17.1 20c-6.3 10.9-6.9 20.3-3.6 22.2 1.7 1 4.5.1 7.6-2.3C24.5 37.2 28 33 30.9 28c2.9-5 4.8-10.1 5.4-14.4.5-4-.1-6.8-1.8-7.8-.5-.2-1-.4-1.6-.4z"
              />
              <path
                fill="#80deea"
                d="M33 44.6c-5 0-12.2-6.1-17.6-15.6C8.9 17.8 7.6 6.9 12.5 4.1 17.4 1.3 26.2 7.8 32.7 19c3 5.2 5 10.6 5.6 15.2.7 4.9-.3 8.3-2.8 9.8-.8.4-1.6.6-2.5.6zM13.5 5.8c-3.3 1.9-2.7 11.3 3.6 22.2 6.3 10.9 14.1 16.1 17.4 14.2 1.7-1 2.3-3.8 1.8-7.8-.6-4.3-2.5-9.4-5.4-14.4C24.6 9.1 16.8 3.9 13.5 5.8z"
              />
              <circle cx={24} cy={24} r={4} fill="#80deea" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
              <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
              <path
                fill="#FFF"
                d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
              />
              <path
                fill="#EEE"
                d="M24 13v4h-8.9l-.3-4H24zm-4.6 8 .2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#00acc1"
                d="M24 9.604c-6.4 0-10.4 3.199-12 9.597 2.4-3.199 5.2-4.398 8.4-3.599 1.826.456 3.131 1.781 4.576 3.247C27.328 21.236 30.051 24 36 24c6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.6-1.825-.456-3.13-1.781-4.575-3.247C32.672 12.367 29.948 9.604 24 9.604zM12 24c-6.4 0-10.4 3.199-12 9.598 2.4-3.199 5.2-4.399 8.4-3.599 1.825.457 3.13 1.781 4.575 3.246 2.353 2.388 5.077 5.152 11.025 5.152 6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.599-1.826-.456-3.131-1.781-4.576-3.246C20.672 26.764 17.949 24 12 24z"
              />
            </svg>
          </div>
          <div>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M24 4.05a19.95 19.95 0 1 0 0 39.9 19.95 19.95 0 1 0 0-39.9Z"
              />
              <path
                fill="#01579b"
                d="M8.001 24c0 6.336 3.68 11.806 9.018 14.4L9.385 17.488A15.942 15.942 0 0 0 8.001 24zm26.803-.806c0-1.977-1.063-3.35-1.67-4.412-.813-1.329-1.576-2.437-1.576-3.752 0-1.465 1.471-2.84 3.041-2.84.071 0 .135.006.206.008A15.901 15.901 0 0 0 24.001 8c-5.389 0-10.153 2.666-13.052 6.749.228.074.307.039.611.039 1.669 0 4.264-.2 4.264-.2.86-.057.965 1.212.099 1.316 0 0-.864.105-1.828.152l5.931 17.778 3.5-10.501-2.603-7.248c-.861-.046-1.679-.152-1.679-.152-.862-.056-.762-1.375.098-1.316 0 0 2.648.2 4.217.2 1.675 0 4.264-.2 4.264-.2.861-.057.965 1.212.104 1.316 0 0-.87.105-1.832.152l5.891 17.61 1.599-5.326c.814-2.08 1.219-3.8 1.219-5.175zm-10.523 2.202-4.8 13.952c1.436.426 2.95.652 4.52.652 1.861 0 3.649-.324 5.316-.907-.04-.071-.085-.143-.118-.22l-4.918-13.477zm13.762-9.078c.071.51.108 1.059.108 1.645 0 1.628-.306 3.451-1.219 5.737l-4.885 14.135A15.994 15.994 0 0 0 40 24a16 16 0 0 0-1.957-7.682z"
              />
              <path
                fill="#01579b"
                d="M4 24c0 11.024 8.97 20 19.999 20C35.03 44 44 35.024 44 24S35.03 4 24 4 4 12.976 4 24zm1.995 0c0-9.924 8.074-17.999 18.004-17.999S42.005 14.076 42.005 24 33.929 42.001 24 42.001c-9.928 0-18.005-8.077-18.005-18.001z"
              />
            </svg>
          </div>
        </ul>
      </div>
      <div className="scroller" data-direction="right">
        <ul className="tag-list scroller_inner">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#0277BD"
                d="M24.047 5c-1.555.005-2.633.142-3.936.367-3.848.67-4.549 2.077-4.549 4.67V14h9v2H10.87c-2.636 0-4.943 1.242-5.674 4.219-.826 3.417-.863 5.557 0 9.125C5.851 32.005 7.294 34 9.931 34h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672.061-.006-1.756-.371-3.298-.365zm-4.984 4c.821 0 1.5.677 1.5 1.502a1.5 1.5 0 0 1-1.5 1.498 1.49 1.49 0 0 1-1.5-1.498A1.5 1.5 0 0 1 19.063 9z"
              />
              <path
                fill="#FFC107"
                d="M23.078 43c1.555-.005 2.633-.142 3.936-.367 3.848-.67 4.549-2.077 4.549-4.67V34h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.219.826-3.417.863-5.557 0-9.125C41.274 15.995 39.831 14 37.194 14h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.439 1.759 4.263 4.218 4.672-.061.006 1.756.371 3.298.365zm4.985-4c-.821 0-1.5-.677-1.5-1.502a1.5 1.5 0 0 1 1.5-1.498c.837 0 1.5.664 1.5 1.498 0 .822-.664 1.502-1.5 1.502z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path fill="#E65100" d="M41 5H7l3 34 14 4 14-4 3-34z" />
              <path fill="#FF6D00" d="M24 8v31.9l11.2-3.2L37.7 8z" />
              <path
                fill="#FFF"
                d="M24 25v-4h8.6l-.7 11.5-7.9 2.6v-4.2l4.1-1.4.3-4.5H24zm8.9-8 .3-4H24v4h8.9z"
              />
              <path
                fill="#EEE"
                d="M24 30.9v4.2l-7.9-2.6-.4-5.5h4l.2 2.5 4.1 1.4zM19.1 17H24v-4h-9.1l.7 12H24v-4h-4.6l-.3-4z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#80deea"
                d="M24 34C11.1 34 1 29.6 1 24s10.1-10 23-10 23 4.4 23 10-10.1 10-23 10zm0-18c-12.6 0-21 4.1-21 8 0 3.9 8.4 8 21 8s21-4.1 21-8c0-3.9-8.4-8-21-8z"
              />
              <path
                fill="#80deea"
                d="M15.1 44.6c-1 0-1.8-.2-2.6-.7-4.9-2.8-3.6-13.7 2.8-24.9 3-5.2 6.7-9.6 10.3-12.4 3.9-3 7.4-3.9 9.8-2.5 2.5 1.4 3.4 4.9 2.8 9.8-.6 4.6-2.6 10-5.6 15.2-3 5.2-6.7 9.6-10.3 12.4-2.6 2-5.1 3.1-7.2 3.1zM32.9 5.4c-1.6 0-3.7.9-6 2.7C23.5 10.8 20 15 17.1 20c-6.3 10.9-6.9 20.3-3.6 22.2 1.7 1 4.5.1 7.6-2.3C24.5 37.2 28 33 30.9 28c2.9-5 4.8-10.1 5.4-14.4.5-4-.1-6.8-1.8-7.8-.5-.2-1-.4-1.6-.4z"
              />
              <path
                fill="#80deea"
                d="M33 44.6c-5 0-12.2-6.1-17.6-15.6C8.9 17.8 7.6 6.9 12.5 4.1 17.4 1.3 26.2 7.8 32.7 19c3 5.2 5 10.6 5.6 15.2.7 4.9-.3 8.3-2.8 9.8-.8.4-1.6.6-2.5.6zM13.5 5.8c-3.3 1.9-2.7 11.3 3.6 22.2 6.3 10.9 14.1 16.1 17.4 14.2 1.7-1 2.3-3.8 1.8-7.8-.6-4.3-2.5-9.4-5.4-14.4C24.6 9.1 16.8 3.9 13.5 5.8z"
              />
              <circle cx={24} cy={24} r={4} fill="#80deea" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
              <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
              <path
                fill="#FFF"
                d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
              />
              <path
                fill="#EEE"
                d="M24 13v4h-8.9l-.3-4H24zm-4.6 8 .2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#00acc1"
                d="M24 9.604c-6.4 0-10.4 3.199-12 9.597 2.4-3.199 5.2-4.398 8.4-3.599 1.826.456 3.131 1.781 4.576 3.247C27.328 21.236 30.051 24 36 24c6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.6-1.825-.456-3.13-1.781-4.575-3.247C32.672 12.367 29.948 9.604 24 9.604zM12 24c-6.4 0-10.4 3.199-12 9.598 2.4-3.199 5.2-4.399 8.4-3.599 1.825.457 3.13 1.781 4.575 3.246 2.353 2.388 5.077 5.152 11.025 5.152 6.4 0 10.4-3.199 12-9.598-2.4 3.199-5.2 4.399-8.4 3.599-1.826-.456-3.131-1.781-4.576-3.246C20.672 26.764 17.949 24 12 24z"
              />
            </svg>
          </div>
          <div>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={100}
              height={100}
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M24 4.05a19.95 19.95 0 1 0 0 39.9 19.95 19.95 0 1 0 0-39.9Z"
              />
              <path
                fill="#01579b"
                d="M8.001 24c0 6.336 3.68 11.806 9.018 14.4L9.385 17.488A15.942 15.942 0 0 0 8.001 24zm26.803-.806c0-1.977-1.063-3.35-1.67-4.412-.813-1.329-1.576-2.437-1.576-3.752 0-1.465 1.471-2.84 3.041-2.84.071 0 .135.006.206.008A15.901 15.901 0 0 0 24.001 8c-5.389 0-10.153 2.666-13.052 6.749.228.074.307.039.611.039 1.669 0 4.264-.2 4.264-.2.86-.057.965 1.212.099 1.316 0 0-.864.105-1.828.152l5.931 17.778 3.5-10.501-2.603-7.248c-.861-.046-1.679-.152-1.679-.152-.862-.056-.762-1.375.098-1.316 0 0 2.648.2 4.217.2 1.675 0 4.264-.2 4.264-.2.861-.057.965 1.212.104 1.316 0 0-.87.105-1.832.152l5.891 17.61 1.599-5.326c.814-2.08 1.219-3.8 1.219-5.175zm-10.523 2.202-4.8 13.952c1.436.426 2.95.652 4.52.652 1.861 0 3.649-.324 5.316-.907-.04-.071-.085-.143-.118-.22l-4.918-13.477zm13.762-9.078c.071.51.108 1.059.108 1.645 0 1.628-.306 3.451-1.219 5.737l-4.885 14.135A15.994 15.994 0 0 0 40 24a16 16 0 0 0-1.957-7.682z"
              />
              <path
                fill="#01579b"
                d="M4 24c0 11.024 8.97 20 19.999 20C35.03 44 44 35.024 44 24S35.03 4 24 4 4 12.976 4 24zm1.995 0c0-9.924 8.074-17.999 18.004-17.999S42.005 14.076 42.005 24 33.929 42.001 24 42.001c-9.928 0-18.005-8.077-18.005-18.001z"
              />
            </svg>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Skills
