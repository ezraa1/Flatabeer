// Code here
document.addEventListener('DOMContentLoaded', () => {

	const beerName = document.querySelector("#beer-name")
	const beerImage = document.querySelector("#beer-image")
	const beerDescription = document.querySelector("#beer-description")
	const reviewList = document.getElementById("review-list")
	beerNavList()
    fetch("http://localhost:3000/beers")
		.then((res) => res.json())
		.then((beersData) => {
			beerName.textContent = beersData[ 0 ].name
			beerImage.src = beersData[ 0 ].image_url
			beerDescription.textContent = beersData[ 0 ].description
			
			//display customer reviews
			beersData[ 0 ].reviews.forEach(review => {
				let reviews = document.createElement('li')
				reviews.innerText = review
				reviewList.appendChild(reviews)
				reviews.addEventListener('click', (e) => {
					e.preventDefault()
					reviews.remove()
				})
			})
        })
})
