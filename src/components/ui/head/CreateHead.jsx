import { Head } from '.'

export const CreateHead = ({
  title = 'DeviApp - Home',
  description = 'DeviApp, the best smartphones',
  image = 'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  url = ''
}) => (
  <Head>
    <meta property='og:title' content={title} />
    <meta property='og:url' content={url} />
    <meta property='og:image' content={image} />
    <meta property='og:description' content={description} />
    <meta property='og:type' content='article' />
    <meta name='twitter:card' content={image} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={description} />
    <meta name='twitter:image' content={image} />
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel='icon' type='image/svg+xml' href='/vite.svg' />
  </Head>
)
