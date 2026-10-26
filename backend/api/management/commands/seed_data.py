from datetime import date
from django.core.management.base import BaseCommand
from api.models import Destination, Stay, Review, TravelGuide


class Command(BaseCommand):
    help = 'Seed the database with sample data for Traveloop'

    def handle(self, *args, **options):
        self.stdout.write('Seeding database...')

        # Clear existing data
        Destination.objects.all().delete()
        Stay.objects.all().delete()
        Review.objects.all().delete()
        TravelGuide.objects.all().delete()

        # --- Popular Destinations ---
        destinations = [
            {
                'name': 'Bali',
                'country': 'Indonesia',
                'image': 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
                'rating': 4.8,
                'description': 'Tropical paradise with stunning temples, rice terraces, and beautiful beaches.',
            },
            {
                'name': 'Dubai',
                'country': 'United Arab Emirates',
                'image': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
                'rating': 4.7,
                'description': 'A dazzling city of modern architecture, luxury shopping, and vibrant nightlife.',
            },
            {
                'name': 'Santorini',
                'country': 'Greece',
                'image': 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
                'rating': 4.9,
                'description': 'Iconic white-washed buildings with blue domes overlooking the Aegean Sea.',
            },
            {
                'name': 'Tokyo',
                'country': 'Japan',
                'image': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
                'rating': 4.6,
                'description': 'A dynamic metropolis blending ultramodern technology with traditional temples.',
            },
        ]
        for d in destinations:
            Destination.objects.create(**d)
        self.stdout.write(self.style.SUCCESS(f'  Created {len(destinations)} destinations'))

        # --- Featured Stays ---
        stays = [
            {
                'name': 'The Royal Villa',
                'location': 'Ubud, Bali',
                'country': 'Indonesia',
                'image': 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800',
                'price_per_night': 350.00,
                'rating': 4.9,
                'tag': 'luxury',
                'description': 'An exquisite villa surrounded by lush tropical gardens and infinity pools.',
            },
            {
                'name': 'Ocean View Resort',
                'location': 'Oia, Santorini',
                'country': 'Greece',
                'image': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800',
                'price_per_night': 420.00,
                'rating': 4.8,
                'tag': 'beachfront',
                'description': 'Breathtaking ocean views with private balconies and world-class dining.',
            },
            {
                'name': 'Skyline Hotel',
                'location': 'Downtown Dubai',
                'country': 'United Arab Emirates',
                'image': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
                'price_per_night': 280.00,
                'rating': 4.7,
                'tag': 'city_view',
                'description': 'Luxury accommodations with panoramic skyline views of the Burj Khalifa.',
            },
            {
                'name': 'Green Valley Resort',
                'location': 'Hakone, Tokyo',
                'country': 'Japan',
                'image': 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
                'price_per_night': 195.00,
                'rating': 4.5,
                'tag': 'family_friendly',
                'description': 'A serene mountain retreat with hot springs and stunning valley views.',
            },
        ]
        for s in stays:
            Stay.objects.create(**s)
        self.stdout.write(self.style.SUCCESS(f'  Created {len(stays)} stays'))

        # --- Reviews ---
        reviews = [
            {
                'name': 'Sarah Johnson',
                'country': 'United States',
                'avatar': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
                'rating': 5,
                'text': 'Traveloop made planning our honeymoon so easy! The resort recommendations were spot on and the booking process was seamless. Highly recommend!',
            },
            {
                'name': 'Marco Rossi',
                'country': 'Italy',
                'avatar': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200',
                'rating': 5,
                'text': 'I have traveled extensively and Traveloop consistently finds the best deals. The curated guides helped me discover hidden gems in Tokyo I would have never found on my own.',
            },
            {
                'name': 'Aisha Patel',
                'country': 'United Kingdom',
                'avatar': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
                'rating': 4,
                'text': 'Great platform for family trips. We booked our Bali vacation through Traveloop and everything was perfectly organized. The kids loved every minute!',
            },
        ]
        for r in reviews:
            Review.objects.create(**r)
        self.stdout.write(self.style.SUCCESS(f'  Created {len(reviews)} reviews'))

        # --- Travel Guides ---
        guides = [
            {
                'title': '10 Essential Tips for First-Time International Travelers',
                'category': 'travel_tips',
                'image': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
                'date': date(2026, 10, 15),
                'excerpt': 'From packing smart to navigating airports, here are the top tips every first-time traveler needs to know before their big adventure.',
            },
            {
                'title': 'The Ultimate Packing Guide for Tropical Destinations',
                'category': 'packing_guide',
                'image': 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800',
                'date': date(2026, 10, 10),
                'excerpt': 'Heading to a tropical paradise? Make sure you pack everything you need with our comprehensive checklist and expert packing strategies.',
            },
            {
                'title': 'Exploring Tokyo: A Complete City Guide',
                'category': 'city_guide',
                'image': 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800',
                'date': date(2026, 10, 5),
                'excerpt': 'Discover the best neighborhoods, street food, temples, and hidden spots in one of the world\'s most fascinating cities.',
            },
        ]
        for g in guides:
            TravelGuide.objects.create(**g)
        self.stdout.write(self.style.SUCCESS(f'  Created {len(guides)} travel guides'))

        self.stdout.write(self.style.SUCCESS('Database seeded successfully!'))
