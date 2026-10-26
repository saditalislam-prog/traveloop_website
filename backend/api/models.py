from django.db import models


class Destination(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    image = models.URLField(max_length=500)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.name}, {self.country}"


class Stay(models.Model):
    TAGS = [
        ('luxury', 'Luxury'),
        ('beachfront', 'Beachfront'),
        ('city_view', 'City View'),
        ('family_friendly', 'Family Friendly'),
        ('boutique', 'Boutique'),
    ]
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    country = models.CharField(max_length=100)
    image = models.URLField(max_length=500)
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    tag = models.CharField(max_length=20, choices=TAGS, default='luxury')
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    avatar = models.URLField(max_length=500, blank=True)
    rating = models.IntegerField(default=5)
    text = models.TextField()

    def __str__(self):
        return f"Review by {self.name}"


class TravelGuide(models.Model):
    CATEGORIES = [
        ('travel_tips', 'Travel Tips'),
        ('packing_guide', 'Packing Guide'),
        ('city_guide', 'City Guide'),
        ('destination', 'Destination'),
    ]
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORIES)
    image = models.URLField(max_length=500)
    date = models.DateField()
    excerpt = models.TextField(blank=True)

    def __str__(self):
        return self.title


class Booking(models.Model):
    BOOKING_TYPES = [
        ('stay', 'Stay'),
        ('flight', 'Flight'),
        ('experience', 'Experience'),
    ]
    booking_type = models.CharField(max_length=20, choices=BOOKING_TYPES)
    destination = models.CharField(max_length=200)
    check_in = models.DateField()
    check_out = models.DateField()
    guests = models.IntegerField(default=1)
    rooms = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.booking_type} - {self.destination}"


class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    subscribed_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
