from rest_framework import serializers
from .models import Destination, Stay, Review, TravelGuide, Booking, NewsletterSubscriber


class DestinationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destination
        fields = '__all__'


class StaySerializer(serializers.ModelSerializer):
    class Meta:
        model = Stay
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class TravelGuideSerializer(serializers.ModelSerializer):
    class Meta:
        model = TravelGuide
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'


class NewsletterSubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber
        fields = '__all__'
