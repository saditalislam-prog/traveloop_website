from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'destinations', views.DestinationViewSet)
router.register(r'stays', views.StayViewSet)
router.register(r'reviews', views.ReviewViewSet)
router.register(r'guides', views.TravelGuideViewSet)
router.register(r'bookings', views.BookingViewSet)
router.register(r'newsletter', views.NewsletterSubscriberViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
