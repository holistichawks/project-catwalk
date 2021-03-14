# Holistic Hawks

## Overview
This project modernizes a customer's retail web portal by designing a new user interface that resembles top of the line retail websites.

## Table of Contents
- Description
   - Overview
   - Related Items And Comparison
   - Ratings and Reviews
- Installation
- Usage
- Additional Information

## Decription
### Overview
This module provides an overview of the product, including product title, price, description, features, styles, sizes, and quantity that render dynamically based on the selected product.

Browser
<img src="https://github.com/cleung0112/ReadMeGifhy/blob/master/aLvVxu5ZQm.gif?raw=true" width = '600px'/>
Mobile
<img src="http://g.recordit.co/RLZ8Ak894L.gif" width = '300px' />

#### Feature : Expanded View with Zoom and Pan
- Click on an image brings user to the expanded view
- In expanded view, user can click on an image to pan over zoom image
<img src="https://github.com/cleung0112/ReadMeGifhy/blob/master/TiWlCBw4iN.gif?raw=true" width = '500px'/>

#### Feature : Style Selector
- Select a new style updates the available sizes and quantity
- A new style renders a new set of product images and thumbnails
<img src="http://g.recordit.co/gXbQDTIDaX.gif" width = '500px'/>

#### Feature : Add to Cart
- A size must be selected in order to add an item to cart
- The total number of items in cart is updated once user clicks add to cart
<img src="https://github.com/cleung0112/ReadMeGifhy/blob/master/eXxHsFHY2F.gif?raw=true" width = '500px'/>


### Related Items And Comparison
![related module][related module]

This module consists of a related products section and an outfit items section.

The related products section displays cards in a carousel. These cards represent items related to the product currently displayed in the above Overview module. The user can click the star on one of these cards in order to compare features of the current product and the one selected. The comparison modal can be closed using the Esc key or simply by clicking outside of it.

The outfit items section also displays cards in a carousel, beginning with a special "Add to Outfit" card which the user can click in order to add the currently selected style of the current product to their outfit list. The outfit list persists after page reload. The user can remove an outfit item by clicking its close button.

### Ratings and Reviews
#### Feature 1 : Post a New Review
- Users are able to write a new review on the Product Details Page
- The form validates user inputs and gives warning messages if there are invalid entries
- If the review is validated, the review will be submitted succeasfully to the API and the total reviews and average rating will be updated on the Product Details Page.
<img src="http://g.recordit.co/6Yp3tuhmVY.gif" width = '500px'/>

#### Feature 2 : Load More Rand Sort Reviews
- Users are able to click on 'More Reviews' button if there are more reviews to load. Once all reviews are loaded, 'More Reviews' button will no longer be available.
- Users can sort the current list of reviews by 'relevance', 'helpful', and 'newest'
<!-- <img src="http://g.recordit.co/ik5JeapTeY.gif" width = '500px'/> -->

#### Feature 3: Vote Helpful Reviews
-  Users are able to vote if a review is helpful or not.
-  When the user has not voted for a review, the button background color will toggle during mouse hover.
-  Once the user has voted, both buttons will become disabled. User will no longer be able to vote again for the same review.

Feature 2        |  Feature 3
:-------------------------:|:-------------------------:
<img src="http://g.recordit.co/ik5JeapTeY.gif" width = '300px'/> |  <img src="http://g.recordit.co/4pF32kzgcz.gif" width = '200px'/>

<!-- <img src="http://g.recordit.co/4pF32kzgcz.gif" width = '400px'/> -->

#### Feature 4 : Filter Reviews By Star Ratings
-  Users are able to filter the current list of displayed reviews by star ratings
-  The filters can be toggled on and off with each click
-  The filters are additive.  If the list has already been filtered for '5' star reviews, clicking on the “4 star” filter will update the reviews list to display '4' and '5' star reviews.
<img src="http://g.recordit.co/wv7FqbuP25.gif" width = '500px'/>


#### Feature 5: Application is Fully Responsive and Mobile Friendly
Browser          |  Mobile
:-------------------------:|:-------------------------:
<img src="http://g.recordit.co/rzvrfRdkYu.gif" width = '300px' />  |  <img src="http://g.recordit.co/u3UeRiIDl9.gif" width = '200px' />


## Installation
1. Fork and clone the repository
2. Run
```bash
npm install
```
3. Run in one terminal
```bash
npm run react-dev
```
4. Run in another terminal
```bash
npm start
```


## Additional Information
### Team Members
1. Carman Leung (Scrum Master, Developer)
2. Maggie Aytac (Developer)
3. Kimberly Lin (Developer for Ratings and Reviews Module)

### Resources



[related module]: RelatedItemsAndComparison.gif
