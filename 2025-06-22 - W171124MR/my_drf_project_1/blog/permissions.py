from rest_framework import permissions


class IsAdminOrModerator(permissions.BasePermission):
    def has_permission(self, request, view):

        is_admin = bool(
            request.user and request.user.is_staff and request.user.is_superuser)

        if is_admin:
            return True

        return request.user.groups.filter(name="moderators").exists()
