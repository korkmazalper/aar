# Definition of Done (DoD) - AAR Platform

## 1. USER STORY DoD (GitLab Issue/Milestone)

- [ ] Code geschrieben und committed (Feature-Branch)
- [ ] Unit-Tests >85% Coverage (JaCoCo)
- [ ] API-Dokumentation aktualisiert (Swagger/OpenAPI)
- [ ] Docker-Image gebaut und gepusht
- [ ] **test.aar.org** deployed (develop Branch)
- [ ] Manuelle QA-Tests bestanden (Postman/Newman)
- [ ] Code-Review **2 Developer** genehmigt
- [ ] Merge main → **api-prod.aar.org** deploy
- [ ] Grafana-Metriken normal (**CPU<70%**, **Response<500ms**)
- [ ] Keine kritischen Errors (Sentry/Logback)

## 2. SPRINT DoD (Milestone-Abschluss)

- [ ] Velocity-Chart aktualisiert
- [ ] **Burndown 100%** abgeschlossen
- [ ] Demo-Video aufgezeichnet (**5min Loom**)
- [ ] Release-Notes geschrieben (**CHANGELOG.md**)
- [ ] Dependabot-Sicherheitsfixes angewendet
- [ ] Performance-Test bestanden (**JMeter 1000 User**)
- [ ] Backup-Test erfolgreich (**MongoDB Restore**)

## 3. SERVICE DoD (Microservice Deploy)

| Kriterium | Status |
|-----------|--------|
| Eureka-Dashboard registered | ✓ |
| `/actuator/health` → **UP** | ✓ |
| Swagger UI erreichbar | ✓ |
| **Redis Cache-Hit >80%** | ✓ |
| **RabbitMQ Queue <100** | ✓ |
| MongoDB-Query **<100ms** | ✓ |
| **100 concurrent <300ms P95** | ✓ |

## 4. FRONTEND DoD (React Deploy)

 Bundle-Größe <100KB (gzip)
✅ Lighthouse-Score >90
✅ TanStack Query → No stale data
✅ Role-basierte UI (ADMIN/USER)
✅ Mobil responsive (iPhone SE)
✅ PWA installierbar

## 5. INFRA DoD (Docker Stack)
docker stack ps aar # → Alle running
docker service ls # → Replicas healthy
nginx logs → No 5xx (1h) # → Clean
SSL gültig >30 Tage # → Valid
DNS worldwide # → Propagated
Failover test → Traffic OK # → Resilient

## 6. SICHERHEIT DoD
OWASP ZAP → No High/Critical
🔒 JWT HS256, expiry<24h
🔒 Rate-Limit 100/min/User
🔒 Docker Secrets (encrypted)
🔒 No hardcoded passwords
🔒 CORS nur api-prod.aar.org

## 7. DOKUMENTATION DoD
📖 README.md (new endpoints)
📖 Swagger JSON export
📖 Deployment-Guide tested
🎨 Draw.io aktualisiert
📚 GitLab Wiki manual

## GitLab Issue Template
[US-001] Benutzer-Login
Akzeptanzkriterien
 JWT-Token (Bearer)

 Refresh-Token

 Passwort 10+ Zeichen

Definition of Done ✅
 Unit-Tests 85%+

 Swagger aktualisiert

 test.aar.org live

 Load-Test 100 User

 Grafana OK

 
## Release-Checklist (Main Merge)

| Schritt | Status |
|---------|--------|
| Code-Freeze | ☐ |
| **QA sign-off** | ☐ |
| **Backup created** | ☐ |
| SSL-Check | ☐ |
| **DNS test** | ☐ |
| Zero-Downtime test | ☐ |
| **Rollback ready** | ☐ |
| Smoke-Test | ☐ |
| **Team notify** | ☐ |

**Quality Gates (GitHub Actions)**
 JaCoCo >85% → Build ✓
✅ SonarQube A → Deploy ✓
✅ Security clean → Docker ✓
✅ P95 <500ms → Release ✓
