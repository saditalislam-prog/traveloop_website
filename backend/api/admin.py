from django.contrib import admin
from .models import Destination, Stay, Review, TravelGuide, Booking, NewsletterSubscriber


@admin.register(Destination)
class DestinationAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'rating')
    search_fields = ('name', 'country')


@admin.register(Stay)
class StayAdmin(admin.ModelAdmin):
    list_display = ('name', 'location', 'country', 'price_per_night', 'rating', 'tag')
    list_filter = ('tag', 'country')
    search_fields = ('name', 'location')


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'rating')
    list_filter = ('rating',)


@admin.register(TravelGuide)
class TravelGuideAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    list_filter = ('category',)
    search_fields = ('title',)


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ('booking_type', 'destination', 'check_in', 'check_out', 'guests', 'rooms', 'created_at')
    list_filter = ('booking_type',)
    search_fields = ('destination',)


@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'subscribed_at')
    search_fields = ('email',)
