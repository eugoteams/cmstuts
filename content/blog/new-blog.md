---
path: new-blog
date: 2021-04-05T11:37:09.818Z
title: New blog
description: The weirdest part of this issue for me was that it was always
  broken on reload, but hot reload fixed it temporarily
image: assets/download.jpg
---


I'm experiencing a similar problem, I have a deeply nested View with row layout. Nothing fancy, just two flex:1 elements side by side. It was extending far off the screen due to some text not wrapping, and even without long text, the elements were not the same size. I fixed this by adding maxWidth: Dimensions.get('window').width to the container. It does not exceed the screen width any longer. This works even though there are margins that make the correct width of the component slightly less than the screen width.

The weirdest part of this issue for me was that it was always broken on reload, but hot reload fixed it temporarily