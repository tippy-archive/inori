document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearBtn');
    const autocompleteList = document.getElementById('autocomplete-list');
    const mainContent = document.getElementById('main-content');
    const searchResults = document.getElementById('search-results');

    let debounceTimer;
    const AUTOCOMPLETE_LIMIT = 5;

    searchInput.addEventListener('input', (e) => {
        const keyword = e.target.value.trim().toLowerCase();

        clearBtn.style.display = keyword.length > 0 ? 'flex' : 'none';

        if (keyword === "") {
            clearTimeout(debounceTimer);
            resetSearch();
            return;
        }

        showAutocomplete(keyword);

        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            executeSearch(keyword);
        }, 200);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            
            const keyword = searchInput.value.trim();
            
            clearTimeout(debounceTimer);

            autocompleteList.innerHTML = '';
            autocompleteList.style.display = 'none';

            executeSearch(keyword);

            searchInput.blur(); 
        }
    });

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearBtn.style.display = 'none';
    resetSearch();
    searchInput.focus();
});

function executeSearch(keyword) {
    if (!keyword) return;

    mainContent.style.display = 'none';
    searchResults.style.display = 'block';

    const k = keyword.toLowerCase();

    const filtered = window.globalData.filter(item => {
        const tags = Array.isArray(item.g) 
            ? item.g.filter(tag => tag !== "null").join(' ').toLowerCase() 
            : "";

        return (
            (item.s && item.s.toLowerCase().includes(k)) || 
            (item.m && item.m.toLowerCase().includes(k)) || 
            (item.u && item.u.toLowerCase().includes(k)) ||
            (tags.includes(k))
        );
    });

    renderWithAnimation(filtered);
}

function showAutocomplete(keyword) {
    const k = keyword.toLowerCase();
    
    const matches = window.globalData
        .filter(item => {
            const tags = Array.isArray(item.g) 
                ? item.g.filter(tag => tag !== "null").join(' ').toLowerCase() 
                : "";

            return (
                (item.s && item.s.toLowerCase().includes(k)) || 
                (item.m && item.m.toLowerCase().includes(k)) || 
                (tags.includes(k)) ||
                (item.u && item.u.toLowerCase().includes(k))
            );
        })
        .slice(0, AUTOCOMPLETE_LIMIT);

        if (matches.length === 0) {
            autocompleteList.innerHTML = '';
            autocompleteList.style.display = 'none';
            return;
        }

        autocompleteList.style.display = 'block';
        autocompleteList.innerHTML = matches.map(item => `
            <div class="autocomplete-item" data-title="${item.s}">${item.s}</div>
        `).join('');

        document.querySelectorAll('.autocomplete-item').forEach(item => {
            item.onclick = (e) => {
                e.stopPropagation();
                const selectedTitle = item.dataset.title;

                searchInput.value = selectedTitle;

                autocompleteList.innerHTML = '';
                autocompleteList.style.display = 'none';

                clearBtn.style.display = 'flex';

                clearTimeout(debounceTimer);
                executeSearch(selectedTitle);
            };
        });
    }

function renderWithAnimation(data) {
    searchResults.innerHTML = '';

    if (data.length === 0) {
        const noResultMsg = document.createElement('p');
        noResultMsg.className = 'no-result';
        noResultMsg.textContent = '검색 결과가 없습니다.';
        searchResults.appendChild(noResultMsg);
        return;
    }

    data.forEach((item, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'search-item-animated';

        wrapper.innerHTML = `
            <a href="${item.u}">
                <ul class="list-select playlist-main">
                    <li class="list-img"><img src="${item.i}"/></li>
                    <li class="list-title"><p>${item.t}</p></li>
                </ul>
            </a>`;
        searchResults.appendChild(wrapper);
    });
}

function resetSearch() {
    if (mainContent) mainContent.style.display = 'block';
    
    if (searchResults) {
        searchResults.style.display = 'none';
        
        searchResults.innerHTML = ''; 
    }
    
    if (autocompleteList) {
        autocompleteList.innerHTML = '';
        autocompleteList.style.display = 'none';
    }
}

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            autocompleteList.innerHTML = '';
            autocompleteList.style.display = 'none';
        }
    });
});