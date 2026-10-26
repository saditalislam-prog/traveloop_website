from rest_framework import viewsets
from .models import Destination, Stay, Review, TravelGuide, Booking, NewsletterSubscriber
from .serializers import (
    DestinationSerializer,
    StaySerializer,
    ReviewSerializer,
    TravelGuideSerializer,
    BookingSerializer,
    NewsletterSubscriberSerializer,
)


class DestinationViewSet(viewsets.ModelViewSet):
    """API endpoint for popular destinations."""
    queryset = Destination.objects.all()
    serializer_class = DestinationSerializer


class StayViewSet(viewsets.ModelViewSet):
    """API endpoint for featured stays."""
    queryset = Stay.objects.all()
    serializer_class = StaySerializer


class ReviewViewSet(viewsets.ModelViewSet):
    """API endpoint for traveler reviews."""
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


class TravelGuideViewSet(viewsets.ModelViewSet):
    """API endpoint for travel guides."""
    queryset = TravelGuide.objects.all()
    serializer_class = TravelGuideSerializer


class BookingViewSet(viewsets.ModelViewSet):
    """API endpoint for bookings."""
    queryset = Booking.objects.all().order_by('-created_at')
    serializer_class = BookingSerializer


class NewsletterSubscriberViewSet(viewsets.ModelViewSet):
    """API endpoint for newsletter subscribers."""
    queryset = NewsletterSubscriber.objects.all()
    serializer_class = NewsletterSubscriberSerializer
