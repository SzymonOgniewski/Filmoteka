console.log((async function(){const t=await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=dd32b08009b8c26db83a645989914c74&page=${page}`);if(!t.ok)throw new Error(t.status);return await t.json()}));
//# sourceMappingURL=index.54740ed8.js.map
