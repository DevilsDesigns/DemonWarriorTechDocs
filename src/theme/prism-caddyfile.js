// Custom Prism language definition for Caddyfile
// Based on Caddy v2 syntax: https://caddyserver.com/docs/caddyfile

export default function addCaddyfileLanguage(Prism) {
  Prism.languages.caddyfile = {
    comment: {
      pattern: /#.*/,
      greedy: true,
    },
    'site-address': {
      pattern: /^[^\s{]+(?:\s+[^\s{]+)*(?=\s*\{)/m,
      alias: 'url',
    },
    directive: {
      pattern:
        /\b(?:acme_server|basicauth|bind|encode|error|file_server|handle|handle_errors|handle_path|header|import|log|map|metrics|php_fastcgi|push|redir|request_body|respond|reverse_proxy|rewrite|root|route|templates|tls|try_files|uri|vars)\b/,
      alias: 'keyword',
    },
    subdirective: {
      pattern:
        /\b(?:dns|ca|ca_root|client_auth|curves|key_type|protocols|alpn|ciphers|prefer_server_cipher_suites|insecure_secrets_log|load_balance|health_check|fail_duration|max_fails|unhealthy_status|unhealthy_latency|unhealthy_request_count|flush_interval|buffer_requests|buffer_responses|max_buffer_size|header_up|header_down|method|to|lb_policy|lb_try_duration|lb_try_interval|transport|trusted_proxies|replace_status|copy_response|copy_response_headers|copy_request|copy_request_headers)\b/,
      alias: 'property',
    },
    matcher: {
      pattern:
        /\b(?:host|method|path|path_regexp|query|header|header_regexp|remote_ip|file|not|expression)\b/,
      alias: 'function',
    },
    'dns-provider': {
      pattern:
        /\b(?:cloudflare|route53|duckdns|digitalocean|gandi|godaddy|namecheap|ovh|vultr|linode|azure|googlecloud)\b/,
      alias: 'class-name',
    },
    string: {
      pattern: /"(?:[^"\\]|\\.)*"/,
      greedy: true,
    },
    url: {
      pattern:
        /\b(?:https?:\/\/)?(?:[\w-]+\.)+[a-z]{2,}(?::\d+)?(?:\/[^\s]*)?/i,
      greedy: true,
    },
    'ip-address': {
      pattern: /\b(?:\d{1,3}\.){3}\d{1,3}(?::\d+)?\b/,
      alias: 'number',
    },
    port: {
      pattern: /:\d+\b/,
      alias: 'number',
    },
    'status-code': {
      pattern: /\b[1-5]\d{2}\b/,
      alias: 'number',
    },
    number: /\b\d+(?:\.\d+)?(?:[kmg]b?)?\b/i,
    boolean: /\b(?:true|false|on|off|yes|no)\b/,
    operator: /[=<>!]+/,
    punctuation: /[{}[\](),;]/,
    variable: {
      pattern: /\{[^}]+\}/,
      alias: 'interpolation',
    },
  };

  // Add alias for common variations
  Prism.languages.caddy = Prism.languages.caddyfile;
}
