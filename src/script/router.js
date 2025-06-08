// src/script/router.js

const pages = {};

function showPage(pageId) {
  if (Object.keys(pages).length === 0) {
    return;
  }

  Object.values(pages).forEach(page => {
    if (page) page.style.display = 'none';
  });

  const targetPage = pages[pageId];
  if (targetPage) {
    targetPage.style.display = 'block';
    if (pageId === 'prediction') {
      const predictionListComponent = document.querySelector('prediction-list');
      if (predictionListComponent && typeof predictionListComponent.refreshPredictions === 'function') {
        predictionListComponent.refreshPredictions();
      }
    }
  } else {
    if (pages.home) {
      pages.home.style.display = 'block';
    } else {
        console.error("Home page element not found for default routing.");
    }
  }
}

function handleHashChange() {
  const pageId = window.location.hash.substring(1) || 'home';
  showPage(pageId);
}

export function initRouter() {
  document.addEventListener('DOMContentLoaded', () => {
    pages.home = document.getElementById('page-home');
    pages.form = document.getElementById('page-form');
    pages.prediction = document.getElementById('page-prediction');
    pages.about = document.getElementById('page-about'); 

    if (!pages.home || !pages.form || !pages.prediction || !pages.about) {
        console.error('One or more page elements are missing from the DOM. Router may not function correctly.');
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  });
}