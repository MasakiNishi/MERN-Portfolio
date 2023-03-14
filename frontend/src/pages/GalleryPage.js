import ImageGallery from 'react-image-gallery';

function GalleryPage() {
    const portfolioImages = [
        {
            original: 'images/myportfolio-pc-home-page.png',
            thumbnail: 'images/myportfolio-pc-home-page-600px.png',
            description: 'Home page',
            originalHeight: '400px'
        },
        {
            original: 'images/myportfolio-pc-blog-page.png',
            thumbnail: 'images/myportfolio-pc-blog-page-600px.png',
            description: 'Blog page',
            originalHeight: '400px'
        },
        {
            original: 'images/myportfolio-pc-article-page.png',
            thumbnail: 'images/myportfolio-pc-article-page-600px.png',
            description: 'Article page',
            originalHeight: '400px'
        },
        {
            original: 'images/myportfolio-pc-profile-page.png',
            thumbnail: 'images/myportfolio-pc-profile-page-600px.png',
            description: 'Profile page',
            originalHeight: '400px'
        },
        {
            original: 'images/myportfolio-pc-contact-page.png',
            thumbnail: 'images/myportfolio-pc-contact-page-600px.png',
            description: 'Contact page',
            originalHeight: '400px'
        }
    ]
    const deskImages = [
        {
            original: 'images/diy-pc-desk-preparation.jpg',
            thumbnail: 'images/diy-pc-desk-preparation-600px.jpg',
            description: 'Preparation',
            originalHeight: '400px'
        },
        {
            original: 'images/diy-pc-desk-filing.jpg',
            thumbnail: 'images/diy-pc-desk-filing-600px.jpg',
            description: 'Filing',
            originalHeight: '400px'
        },
        {
            original: 'images/diy-pc-desk-painting.jpg',
            thumbnail: 'images/diy-pc-desk-painting-600px.jpg',
            description: 'Painting',
            originalHeight: '400px'
        },
        {
            original: 'images/diy-pc-desk-construction.jpg',
            thumbnail: 'images/diy-pc-desk-construction-600px.jpg',
            description: 'Assembling',
            originalHeight: '400px'
        },
        {
            original: 'images/diy-pc-desk.jpg',
            thumbnail: 'images/diy-pc-desk-600px.jpg',
            description: 'My DIY desk',
            originalHeight: '400px'
        }
    ]

    return (
      <>
        <h2 className="subpage">Gallery</h2>
        <article>
            <h3>My portfollio design</h3>
            <ImageGallery items={portfolioImages} />
        </article>
        <article>
            <h3>My DIY Desk</h3>
            <ImageGallery items={deskImages} />
        </article>
      </>
    );
}

export default GalleryPage;
