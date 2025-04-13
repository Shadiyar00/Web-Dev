from django.urls import path
from .views_cbv import (
    CompanyListCreateAPIView, CompanyDetailAPIView,
    VacancyListCreateAPIView, VacancyDetailAPIView,
)
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_detail),
    path('vacancies/top_ten/', views.top_ten_vacancies),
    path('cbv/companies/', CompanyListCreateAPIView.as_view()),
    path('cbv/companies/<int:pk>/', CompanyDetailAPIView.as_view()),
    path('cbv/vacancies/', VacancyListCreateAPIView.as_view()),
    path('cbv/vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
]
