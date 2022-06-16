from django.http.response import JsonResponse

from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view

from .models import User
from .models import Artist

from .serializers import UserSerializer
from .serializers import ArtistSerializer



# User Views

@api_view(['POST'])
def list_users(request):
    if request.method == 'POST':
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def add_user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid(True):
            serializer.save()
            return Response("test", status.HTTP_200_OK)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


# Artist Views

@api_view(['POST'])
def list_artists(request):
    if request.method == 'POST':
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def add_artist(request):
    if request.method == 'POST':
        serializer = ArtistSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid(True):
            serializer.save()
            return Response("test", status.HTTP_200_OK)
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)